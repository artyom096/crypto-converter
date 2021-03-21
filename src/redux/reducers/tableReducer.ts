import { IReducerTable } from '../../types';
import { COMPARE_CRYPTO, GET_CRYPTO } from '../reduxTypes';

const initialState = {
	coins: [],
};

export const tableReducer = (state = initialState, action: IReducerTable) => {
	switch (action.type) {
		case GET_CRYPTO:
			return {
				coins: [...action.payload],
			};
		case COMPARE_CRYPTO:
			return {
				coins: [...action.payload],
			};
		default:
			return state;
	}
};
