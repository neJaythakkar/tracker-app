import Name from '../';
import { createSelectors } from '../../helpers';

const props = [
	'consoleCollapsed',
];

export const [
	isCollapsed,
] = createSelectors(Name, props);
