import { APP_ROUTES } from '@/utils/constants';
import { elementTestSelector } from '@/utils/constants/testingSelectors';
import { getTestingAttribute } from '@/utils/helpers';
import { Button, Flex, Heading } from '@radix-ui/themes';
import { useNavigate } from 'react-router';

interface IFullPageCenteredMessageProps {
	message: string;
	showGoToHomeButton?: boolean;
	fpcmConEts?: string;
	fpcmHeadingEts?: string;
	fpcmButtonEts?: string;
}

const FullPageCenteredMessage: React.FC<IFullPageCenteredMessageProps> = ({
	message,
	showGoToHomeButton = true,
	fpcmConEts,
	fpcmHeadingEts,
	fpcmButtonEts,
}) => {
	const navigate = useNavigate();

	const navigateBackToHome = () => {
		navigate(APP_ROUTES.home);
	};

	return (
		<Flex
			minHeight='68vh'
			justify='center'
			align='center'
			direction='column'
			{...getTestingAttribute(
				fpcmConEts ?? elementTestSelector.components.fullPageCenteredMessage.con
			)}
		>
			<Heading
				align='center'
				{...getTestingAttribute(
					fpcmHeadingEts ??
						elementTestSelector.components.fullPageCenteredMessage.heading
				)}
			>
				{message}
			</Heading>
			{showGoToHomeButton ? (
				<Button
					onClick={navigateBackToHome}
					mt='4'
					{...getTestingAttribute(
						fpcmButtonEts ??
							elementTestSelector.components.fullPageCenteredMessage.button
					)}
				>
					Go Back Home
				</Button>
			) : null}
		</Flex>
	);
};
export default FullPageCenteredMessage;
