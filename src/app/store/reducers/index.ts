import { reducer, IappReducerState } from './appReducer';
import { ActionReducerMap} from '@ngrx/store';

interface AppState {
    appReducer: IappReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
    appReducer: reducer
};
