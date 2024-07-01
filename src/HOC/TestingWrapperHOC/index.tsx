import { Theme } from '@radix-ui/themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

import '@radix-ui/themes/styles.css';
import 'react-toastify/dist/ReactToastify.min.css';

interface ITestingWrapperHOCProps {
	children: React.ReactNode;
}
const queryClient = new QueryClient();

const TestingWrapperHOC: React.FC<ITestingWrapperHOCProps> = ({ children }) => {
	return (
		<Theme>
			<RecoilRoot>
				<QueryClientProvider client={queryClient}>
					<MemoryRouter>{children}</MemoryRouter>
				</QueryClientProvider>
			</RecoilRoot>

			<ToastContainer />
		</Theme>
	);
};
export default TestingWrapperHOC;
