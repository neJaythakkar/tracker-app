import Name from '../';
import * as uiActionTypes from '../actionTypes';
import { createSetter } from '../../helpers';

export const [toggleConsole] = createSetter(Name, [uiActionTypes.TOGGLECONSOLE]);


