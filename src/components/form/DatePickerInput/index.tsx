import { ISearchArticlesFiltersFormData } from '@/types/formData';
import { useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';
import './styles.css';
import { Flex, Text } from '@radix-ui/themes';
import { useResponsiveScales } from '@/hooks/reactResponsive';
import { getTestingAttribute } from '@/utils/helpers';

interface IDatePickerInputProps {
	value?: string | Date | null;
	inputName: string;
	placeholder: string;
	minDate?: Date;
	maxDate?: Date;
	errorMessage?: string;
	isTouched?: boolean;
	fieldDataEts: string;
	fieldErrorMessageDataEts?: string;
}

const DatePickerInput: React.FC<IDatePickerInputProps> = ({
	value,
	inputName,
	placeholder,
	minDate,
	maxDate,
	errorMessage,
	isTouched,
	fieldDataEts,
	fieldErrorMessageDataEts,
}) => {
	const { isMobile } = useResponsiveScales();
	const { setFieldValue, handleBlur } =
		useFormikContext<ISearchArticlesFiltersFormData>();

	return (
		<Flex
			direction='column'
			mb='3'
			width={isMobile ? '100%' : '200px'}
			{...getTestingAttribute(fieldDataEts)}
		>
			<DatePicker
				selected={value ? new Date(value) : null}
				onChange={(date) => {
					if (date) {
						const formattedDate = dayjs(date).format('YYYY-MM-DD');
						setFieldValue(inputName, formattedDate, true);
					}
				}}
				onBlur={handleBlur}
				name={inputName}
				className='date-picker'
				placeholderText={placeholder}
				minDate={minDate}
				maxDate={maxDate}
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

export default DatePickerInput;
