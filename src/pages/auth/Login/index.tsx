import HandleFormValidationState from '@/components/HandleFormValidationState';
import FormActionButtons from '@/components/form/FormActionButtons';
import TextInput from '@/components/form/TextInput';
import { LoginFormFieldsEnum } from '@/enums/formData';
import { usePostRequest } from '@/hooks/reactQuery';
import { formValidationRStateAtom } from '@/state/formState';
import { userDataRStateAtom } from '@/state/userState';
import { IApiResponse } from '@/types/backendApi';
import { IUser } from '@/types/userData';
import { API_URLS, APP_ROUTES } from '@/utils/constants';
import { loginFormFields } from '@/utils/constants/formFields';
import { reactQueryKeys } from '@/utils/constants/reactQuery';
import { elementTestSelector } from '@/utils/constants/testingSelectors';
import {
	formatFormErrorsFromApiResponse,
	getTestingAttribute,
	setAuthDataInLocalStorage,
} from '@/utils/helpers';
import { showToast } from '@/utils/helpers/capacitorApis';
import {
	showErrorNotification,
	showSuccessNotification,
} from '@/utils/helpers/reactToastify';
import { MESSAGES } from '@/utils/messages';
import { loginFormValidationSchema } from '@/validationSchema';
import { Box, Card, Flex, Heading, Link, Text } from '@radix-ui/themes';
import { Form, Formik } from 'formik';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ZodError } from 'zod';

const Login: React.FC = () => {
	const navigate = useNavigate();

	const navigateToRegisterPage = () => {
		navigate(APP_ROUTES.register);
	};
	return (
		<Box>
			<Flex justify='center' align='center' minHeight='70vh' direction='column'>
				<Card>
					<Box minWidth='250px' width='80vw' maxWidth='500px'>
						<Heading
							mb='4'
							align='center'
							{...getTestingAttribute(elementTestSelector.pages.lp.heading)}
						>
							Login
						</Heading>
						<LoginForm />
					</Box>
				</Card>

				<Text mt='3'>
					Don't have a account yet?{' '}
					<Link
						onClick={navigateToRegisterPage}
						className='pointer'
						{...getTestingAttribute(elementTestSelector.pages.lp.registerPnl)}
					>
						Create a Account
					</Link>
				</Text>

				<HandleFormValidationState />
			</Flex>
		</Box>
	);
};

const LoginForm: React.FC = () => {
	const initialValues = useMemo(
		() => ({
			[LoginFormFieldsEnum.email]: '',
			[LoginFormFieldsEnum.password]: '',
		}),
		[]
	);
	const { mutateAsync: loginUser } = usePostRequest(
		reactQueryKeys.mutation.login
	);
	const setUserDataRState = useSetRecoilState(userDataRStateAtom);
	const formValidationRState = useRecoilValue(formValidationRStateAtom);

	return (
		<Formik
			initialValues={initialValues}
			validate={(values) => {
				if (formValidationRState.frontendFormValidationIsEnabled) {
					try {
						loginFormValidationSchema.parse(values);
					} catch (error) {
						if (error instanceof ZodError) {
							return error.formErrors.fieldErrors;
						}
					}
				}
			}}
			onSubmit={async (values, { setErrors }) => {
				const reqData = JSON.stringify({
					email: values[LoginFormFieldsEnum.email],
					password: values[LoginFormFieldsEnum.password],
				});

				try {
					const res = await loginUser({
						url: API_URLS.login,
						data: reqData,
					});

					const resData = JSON.parse(res.data) as IApiResponse<IUser>;

					if (resData.errors) {
						const _errors = formatFormErrorsFromApiResponse(resData.errors);
						if (_errors) {
							showToast(MESSAGES.general.invalidData);
							setErrors(_errors);
						}
					} else {
						const userData = resData.result?.data;
						const authToken = resData.result?.authToken;

						if (userData && authToken) {
							await setAuthDataInLocalStorage({ userData, authToken });

							showSuccessNotification();

							setUserDataRState(userData);
						} else {
							showErrorNotification(MESSAGES.backendApi.invalidUserData);
						}
					}
				} catch (error) {
					showErrorNotification();
				}
			}}
		>
			{({ values, errors, touched }) => {
				return (
					<Form {...getTestingAttribute(elementTestSelector.pages.lp.form.con)}>
						{(Object.keys(loginFormFields) as LoginFormFieldsEnum[]).map(
							(_fieldKey) => {
								return (
									<TextInput
										key={_fieldKey}
										inputName={_fieldKey}
										placeholder={loginFormFields[_fieldKey].placeholder}
										type={loginFormFields[_fieldKey].type}
										value={values[_fieldKey]}
										errorMessage={errors[_fieldKey]}
										isTouched={touched[_fieldKey]}
										fieldDataEts={
											elementTestSelector.pages.lp.form.fields[_fieldKey].input
										}
										fieldErrorMessageDataEts={
											elementTestSelector.pages.lp.form.fields[_fieldKey]
												.errorMessage
										}
										fieldIconButtonDataEts={
											elementTestSelector.pages.lp.form.fields[_fieldKey]
												.iconButton
										}
									/>
								);
							}
						)}

						<FormActionButtons />
					</Form>
				);
			}}
		</Formik>
	);
};

export default Login;
