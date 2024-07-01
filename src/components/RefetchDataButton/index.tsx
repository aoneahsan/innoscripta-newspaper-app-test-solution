import { getTestingAttribute } from '@/utils/helpers';
import { Button, Flex } from '@radix-ui/themes';

interface IRefetchDataButtonProps {
	onClick: () => void;
	refetchButtonText?: string;
	dataEts: string;
}

const RefetchDataButton: React.FC<IRefetchDataButtonProps> = ({
	onClick,
	refetchButtonText = 'Refetch Data',
	dataEts,
}) => {
	return (
		<Flex justify='end' align='center' className='container'>
			<Button
				onClick={onClick}
				className='w-full'
				{...getTestingAttribute(dataEts)}
			>
				{refetchButtonText}
			</Button>
		</Flex>
	);
};

export default RefetchDataButton;
