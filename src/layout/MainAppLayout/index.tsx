import AuthenticationHOC from '@/HOC/AuthenticationHOC';
import NetworkDetectHOC from '@/HOC/NetworkDetectHOC';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useResponsiveScales } from '@/hooks/reactResponsive';
import { getTestingAttribute } from '@/utils/helpers';
import { Box } from '@radix-ui/themes';
import { Outlet, useLocation } from 'react-router';

const MainAppLayout: React.FC = () => {
	const { isMobile } = useResponsiveScales();
	const location = useLocation();

	return (
		<>
			<p
				style={{
					position: 'absolute',
					top: '-100%',
					right: '-100%',
					userSelect: 'none',
					visibility: 'hidden',
				}}
				{...getTestingAttribute('app-location-info')}
			>
				{JSON.stringify(location)}
			</p>
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
