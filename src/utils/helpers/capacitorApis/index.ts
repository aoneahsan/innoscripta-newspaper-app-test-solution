import { ToastDurationEnum, ToastPositionEnum } from '@/enums/capacitorApis';
import { MESSAGES } from '@/utils/messages';
import { Toast } from '@capacitor/toast';
import { Browser } from '@capacitor/browser';
import { LinkTargetEnum } from '@/enums';

export const showToast = async (
	message: string = MESSAGES.general.success,
	duration: ToastDurationEnum = ToastDurationEnum.long,
	position: ToastPositionEnum = ToastPositionEnum.bottom
) => {
	await Toast.show({
		text: message,
		position,
		duration,
	});
};

export const BROWSER = {
	open: async (url: string, target: LinkTargetEnum = LinkTargetEnum.blank) => {
		try {
			await Browser.open({
				url,
				windowName: target,
			});
		} catch (error) {
			window.open(url, target);
		}
	},
};
