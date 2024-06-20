import { Theme, ThemePanel } from '@radix-ui/themes';

// Import Radix UI CSS
import { RouterProvider } from 'react-router-dom';
import { appRouter } from '@/AppRouter';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

import '@radix-ui/themes/styles.css';
import 'react-toastify/dist/ReactToastify.min.css';

import 'react-datepicker/dist/react-datepicker.css';
import { isCapWeb } from './utils/constants/capacitorApis';

const queryClient = new QueryClient();

const AppEntryPoint: React.FC = () => (
	<>
		<Theme>
			<RecoilRoot>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={appRouter} />

					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</RecoilRoot>
			{isCapWeb && <ThemePanel />}

			<ToastContainer />
		</Theme>
	</>
);

export default AppEntryPoint;
