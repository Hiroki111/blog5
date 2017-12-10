import createConfirmation from './createConfirmation.js';
import DialogBox from './dialogbox.js';

const confirm = createConfirmation(DialogBox);

export default function ConfirmationService(confirmation, options = {}) {
	return confirm({
		confirmation,
		...options
	});
}