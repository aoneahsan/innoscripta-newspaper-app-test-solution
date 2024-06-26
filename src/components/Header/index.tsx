import { Box, Flex } from '@radix-ui/themes';
import IMAGES from '@/assets/images';
import './styles.css';
import { APP_ROUTES } from '@/utils/constants';
import { useMemo } from 'react';
import NavigationLink from '../NavigationLink';
import { useRecoilValue } from 'recoil';
import { userIsAuthenticatedRStateSelector } from '@/state/userState';
import LogoutButton from '../LogoutButton';
import { useResponsiveScales } from '@/hooks/reactResponsive';
import { getTestingAttribute } from '@/utils/helpers';
import { elementTestSelector } from '@/utils/constants/testingSelectors';

const Header: React.FC = () => {
	const { isMobile } = useResponsiveScales();
	const links = useMemo(() => {
		return [
			{
				path: APP_ROUTES.home,
				isAuthenticated: true,
				label: 'Search Articles',
				ets: elementTestSelector.header.nls.searchArticles,
			},
			{
				path: APP_ROUTES.userFeed,
				isAuthenticated: true,
				label: 'News Feed',
				ets: elementTestSelector.header.nls.newsFeed,
			},
			{
				path: APP_ROUTES.myAccount,
				isAuthenticated: true,
				label: 'My Account',
				ets: elementTestSelector.header.nls.myAccount,
			},
			{
				path: APP_ROUTES.login,
				isAuthenticated: false,
				label: 'Login',
				ets: elementTestSelector.header.nls.login,
			},
			{
				path: APP_ROUTES.register,
				isAuthenticated: false,
				label: 'Register',
				ets: elementTestSelector.header.nls.register,
			},
		];
	}, []);
	const userIsAuthenticatedRState = useRecoilValue(
		userIsAuthenticatedRStateSelector
	);

	return (
		<>
			<Box
				className='header-con'
				{...getTestingAttribute(elementTestSelector.header.con)}
			>
				<Box className='container' py='3'>
					<Flex
						justify={isMobile ? 'center' : 'between'}
						align='center'
						direction={isMobile ? 'column' : 'row'}
					>
						<img
							src={IMAGES.NewsPaperAppIcon}
							width={60}
							{...getTestingAttribute(elementTestSelector.header.logo)}
						/>
						<Flex
							justify={isMobile ? 'center' : 'start'}
							align='center'
							mt={isMobile ? '4' : '0'}
							wrap='wrap'
						>
							{links.map((el, index) => (
								<NavigationLink
									isAuthenticated={el.isAuthenticated}
									label={el.label}
									path={el.path}
									key={`${el.path}-${el.label}-${index}`}
									ets={el.ets}
								/>
							))}
							{userIsAuthenticatedRState ? <LogoutButton /> : null}
						</Flex>
					</Flex>
				</Box>
			</Box>
		</>
	);
};
export default Header;
