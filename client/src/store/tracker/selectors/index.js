import Name from '../';
import { createSelectors } from '../../helpers';

const props = [
	'events',
];

export const [
	getEvents,
] = createSelectors(Name, props);
