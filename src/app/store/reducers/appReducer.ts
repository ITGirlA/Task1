import {ACTION_LOGOUT, ACTION_LOGIN} from '../actions/appActions';

export interface IappReducerState {
  login: boolean;
  token?: string;
}

const initialState: IappReducerState = {
  login: false,  token: ''
};

export function reducer(state = initialState, action): IappReducerState {

    switch (action.type) {
        case ACTION_LOGOUT:
            return {
                ...state,
                login: false,
                token: ''
            };
        case ACTION_LOGIN:
            return {
                ...state,
                login: true,
                token: action.payload
            };
        default: return state;
    }
}