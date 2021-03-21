import { combineReducers } from 'redux';
import { tableReducer } from './tableReducer';
import { converterReducer } from './converterReducer';

export const rootReducer = combineReducers({
	table: tableReducer,
	converter: converterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
