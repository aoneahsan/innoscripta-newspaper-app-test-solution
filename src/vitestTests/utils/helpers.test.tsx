import { expect, describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { truncateText } from '@/utils/helpers';

import App from '@/App';

describe('Testing with Vitest Demo', () => {
	test('Testing "truncateText" helper function using vitest', () => {
		const text = 'a very long string'
		const result = truncateText(text, 3);

		expect(result).to.contains('...');
		expect(result).to.eq('a v...');

		expect(truncateText(text)).toEqual(text);
		expect(truncateText()).toEqual('');


		const res = render(<App />);
		expect(res).toBeTruthy();
	});
});
