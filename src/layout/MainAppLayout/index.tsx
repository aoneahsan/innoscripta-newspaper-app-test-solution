import AuthenticationHOC from '@/HOC/AuthenticationHOC';
import NetworkDetectHOC from '@/HOC/NetworkDetectHOC';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useResponsiveScales } from '@/hooks/reactResponsive';
import { getAuthDataFromLocalStorage } from '@/utils/helpers';
import { Box } from '@radix-ui/themes';
import { useEffect } from 'react';
import { Outlet } from 'react-router';

const MainAppLayout: React.FC = () => {
	const { isMobile } = useResponsiveScales();

	useEffect(() => {
		void (async () => {
			const authData = await getAuthDataFromLocalStorage();

			console.log({ ml: 'MainAppLayout -> useEffect -> authData: ', authData });
		})();
	});
	return (
		<>
			<NetworkDetectHOC>
				<AuthenticationHOC>
					<Header />
					<Box minHeight={isMobile ? '65vh' : '80vh'}>
						<Outlet />
					</Box>
					<Footer />
				</AuthenticationHOC>
			</NetworkDetectHOC>
		</>
	);
};

export default MainAppLayout;
