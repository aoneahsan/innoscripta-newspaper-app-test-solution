import { useResponsiveScales } from '@/hooks/reactResponsive';
import {
	ISearchArticlesFiltersFormData,
	ISelectOption,
} from '@/types/formData';
import { getTestingAttribute } from '@/utils/helpers';
import { Flex, Text } from '@radix-ui/themes';
import { useFormikContext } from 'formik';
import ReactSelect from 'react-select';

interface ISelectInputProps {
	value?: string;
	inputName: string;
	placeholder: string;
	errorMessage?: string;
	isTouched?: boolean;
	options: ISelectOption[];
	isMulti?: boolean;
	disabled?: boolean;
	fieldDataEts: string;
	fieldErrorMessageDataEts?: string;
}

const SelectInput: React.FC<ISelectInputProps> = ({
	value,
	inputName,
	placeholder,
	errorMessage,
	isTouched,
	options,
	isMulti,
	disabled,
	fieldDataEts,
	fieldErrorMessageDataEts,
}) => {
	const { isMobile } = useResponsiveScales();
	const { setFieldValue, handleBlur } =
		useFormikContext<ISearchArticlesFiltersFormData>();

	if (options?.length <= 0) {
		return null;
	}

	return (
		<Flex direction='column' mb='3' {...getTestingAttribute(fieldDataEts)}>
			<ReactSelect
				name={inputName}
				isDisabled={disabled}
				value={
					value
						? isMulti
							? value.split(',').map((el) => ({ label: el, value: el }))
							: { label: value, value }
						: null
				}
				placeholder={placeholder}
				options={options ?? []}
				onBlur={handleBlur}
				onChange={(val) => {
					if (
						(!isMulti && val) ||
						(isMulti && (val as unknown as ISelectOption[]).length > 0)
					) {
						let _val;
						if (isMulti) {
							_val = (val as unknown as ISelectOption[])
								.map((el) => el.value)
								.join(',');
						} else {
							_val = (val as unknown as ISelectOption).value;
						}

						if (_val) {
							setFieldValue(inputName, _val, true);
						}
					} else {
						setFieldValue(inputName, undefined, true);
					}
				}}
				className={isMobile ? '' : 'input-width'}
				isClearable
				isMulti={isMulti}
				isSearchable
			/>
			{isTouched && errorMessage ? (
				<Text
					color='red'
					size='1'
					ml='1'
					mt='1'
					{...getTestingAttribute(fieldErrorMessageDataEts ?? '')}
				>
					{errorMessage}
				</Text>
			) : null}
		</Flex>
	);
};

export default SelectInput;
