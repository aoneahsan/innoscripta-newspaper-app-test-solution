import { Form, Formik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';

interface ITestingFormikHOCProps {
	children: React.ReactNode;
}
const TestingFormikHOC: React.FC<ITestingFormikHOCProps> = ({ children }) => {
	return (
		<Formik initialValues={{}} onSubmit={() => {}}>
			<Form>{children}</Form>
		</Formik>
	);
};

export default TestingFormikHOC;
