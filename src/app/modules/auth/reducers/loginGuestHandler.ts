/*---------------------------------------------------------------------------------------------
 *  Copyright (c) IBAX All rights reserved.
 *  See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { State } from '../reducer';
import { loginGuest } from '../actions';
import { Reducer } from 'modules';

const loginGuestHandler: Reducer<typeof loginGuest.started, State> = (state, payload) => ({
    ...state,
    isLoggingIn: true
});

export default loginGuestHandler;