import FormActionButtons from '@/components/form/FormActionButtons';
import TextInput from '@/components/form/TextInput';
import { UserAccountDataFormFieldsEnum } from '@/enums/formData';
import { usePutRequest } from '@/hooks/reactQuery';
import { formValidationRStateAtom } from '@/state/formState';
import { userDataRStateAtom } from '@/state/userState';
import { IApiResponse } from '@/types/backendApi';
import { IUser } from '@/types/userData';
import { API_URLS } from '@/utils/constants';
import { userAccountDataFormFields } from '@/utils/constants/formFields';
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
import { userAccountFormValidationSchema } from '@/validationSchema';
import { Box, Button, Card, Flex, Heading } from '@radix-ui/themes';
import { Form, Formik } from 'formik';
import React, { useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ZodError } from 'zod';

const MyAccount: React.FC = () => {
	return (
		<Box>
			<Flex justify='center' align='center' minHeight='40vh' direction='column'>
				<Card>
					<Box minWidth='250px' width='80vw' maxWidth='500px'>
						<Heading
							mb='4'
							align='center'
							{...getTestingAttribute(
								elementTestSelector.pages.myAccount.heading
							)}
						>
							MyAccount
						</Heading>
						<MyAccountForm />
					</Box>
				</Card>
			</Flex>
		</Box>
	);
};

const MyAccountForm: React.FC = () => {
	const [userDataRState, setUserDataRState] =
		useRecoilState(userDataRStateAtom);
	const initialValues = useMemo(
		() => ({
			[UserAccountDataFormFieldsEnum.name]: userDataRState?.name ?? '',
		}),
		[userDataRState]
	);
	const { mutateAsync: updateUserData } = usePutRequest(
		reactQueryKeys.mutation.updateUserData
	);
	const formValidationRState = useRecoilValue(formValidationRStateAtom);

	return (
		<Formik
			initialValues={initialValues}
			enableReinitialize
			validate={(values) => {
				if (formValidationRState.frontendFormValidationIsEnabled) {
					try {
						userAccountFormValidationSchema.parse(values);
					} catch (error) {
						if (error instanceof ZodError) {
							return error.formErrors.fieldErrors;
						}
					}
				}
			}}
			onSubmit={async (values, { setErrors }) => {
				const reqData = JSON.stringify({
					name: values[UserAccountDataFormFieldsEnum.name],
				});

				try {
					const res = await updateUserData({
						url: API_URLS.updateUserData,
						data: reqData,
						isAuthenticatedRequest: true,
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

						if (userData) {
							await setAuthDataInLocalStorage({ userData });

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
					<Form
						{...getTestingAttribute(
							elementTestSelector.pages.myAccount.form.con
						)}
					>
						{(
							Object.keys(
								userAccountDataFormFields
							) as UserAccountDataFormFieldsEnum[]
						).map((_fieldKey) => {
							return (
								<TextInput
									key={_fieldKey}
									inputName={_fieldKey}
									placeholder={userAccountDataFormFields[_fieldKey].placeholder}
									type={userAccountDataFormFields[_fieldKey].type}
									value={values[_fieldKey]}
									errorMessage={errors[_fieldKey]}
									isTouched={touched[_fieldKey]}
									fieldDataEts={
										elementTestSelector.pages.myAccount.form.fields[_fieldKey]
											.input
									}
									fieldErrorMessageDataEts={
										elementTestSelector.pages.myAccount.form.fields[_fieldKey]
											.errorMessage
									}
									fieldIconButtonDataEts={
										elementTestSelector.pages.myAccount.form.fields[_fieldKey]
											.iconButton
									}
								/>
							);
						})}

						<FormActionButtons submitButtonText='Update' />
					</Form>
				);
			}}
		</Formik>
	);
};

export default MyAccount;
