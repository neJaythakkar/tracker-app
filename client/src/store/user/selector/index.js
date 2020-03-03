import Name from '../';
import { createSelectors } from '../../helpers';

const props = [
	'userId',
];

export const [
	getUserId,
] = createSelectors(Name, props);
