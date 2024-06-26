import { Box, Button, Flex, Link, Text } from '@radix-ui/themes';
import './styles.css';
import { developerDetails } from '@/utils/constants';
import { LinkTargetEnum } from '@/enums';
import { useMemo } from 'react';
import { useResponsiveScales } from '@/hooks/reactResponsive';
import { elementTestSelector } from '@/utils/constants/testingSelectors';
import { getTestingAttribute } from '@/utils/helpers';

const Footer: React.FC = () => {
	const { isMobile } = useResponsiveScales();
	const links = useMemo(() => {
		return [
			{
				url: developerDetails.linkedinProfile,
				label: 'Linkedin Profile',
				ets: elementTestSelector.footer.links.in,
			},
			{
				url: developerDetails.githubProfile,
				label: 'Github Profile',
				ets: elementTestSelector.footer.links.gh,
			},
			{
				url: developerDetails.updatedResume,
				label: 'Updated Resume',
				ets: elementTestSelector.footer.links.ur,
			},
			{
				url: developerDetails.updatedCV,
				label: 'Updated CV',
				ets: elementTestSelector.footer.links.uc,
			},
		];
	}, []);

	return (
		<>
			<Box
				className='footer-con'
				py='2'
				{...getTestingAttribute(elementTestSelector.footer.con)}
			>
				<Box className='container'>
					<Flex
						justify={isMobile ? 'center' : 'between'}
						align='center'
						direction={isMobile ? 'column' : 'row'}
					>
						<Text
							align={isMobile ? 'center' : 'left'}
							{...getTestingAttribute(elementTestSelector.footer.cprText)}
						>
							All rights reserved © {new Date().getFullYear()}
						</Text>
						<Text
							align={isMobile ? 'center' : 'left'}
							{...getTestingAttribute(elementTestSelector.footer.dicText)}
						>
							Developed by{' '}
							<Link
								href={developerDetails.portfolioWebsite}
								target={LinkTargetEnum.blank}
							>
								Ahsan Mahmood
							</Link>{' '}
							with ♡
						</Text>
					</Flex>
					<Flex
						justify='center'
						align='center'
						mt={isMobile ? '2' : '1'}
						wrap='wrap'
					>
						{links.map((el, index) => {
							return (
								<Button
									size='1'
									asChild
									mr='2'
									mb={isMobile ? '2' : '0'}
									key={`${el.label}-${index}`}
									{...getTestingAttribute(el.ets)}
								>
									<Link href={el.url} target={LinkTargetEnum.blank}>
										{el.label}
									</Link>
								</Button>
							);
						})}
					</Flex>
				</Box>
			</Box>
		</>
	);
};
export default Footer;
