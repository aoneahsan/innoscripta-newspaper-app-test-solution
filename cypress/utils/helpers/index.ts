import { userAuthData } from '@cy/data/user';

export const getCyElementTestSelector = (ets: string): string => {
	return `[zaions-ets="${ets}"]`;
};

// we can use faker instead to get actual unique emails
export const getUniqueEmail = (time: number): string => {
	const emailArr = userAuthData.email.split('@');
	const newEmail = emailArr[0] + time + '@' + emailArr[1];
	return newEmail;
};
