import { Flex, Spinner } from '@radix-ui/themes';
import React from 'react';
import './styles.css';
import { getTestingAttribute } from '@/utils/helpers';
import { elementTestSelector } from '@/utils/constants/testingSelectors';

const FullPageLoader: React.FC = () => {
	return (
		<Flex
			justify='center'
			align='center'
			height='100%'
			minHeight='100vh'
			{...getTestingAttribute(
				elementTestSelector.components.fullPageLoader.con
			)}
		>
			<Spinner
				className='spinner'
				size='3'
				{...getTestingAttribute(
					elementTestSelector.components.fullPageLoader.icon
				)}
			/>
		</Flex>
	);
};
export default FullPageLoader;
