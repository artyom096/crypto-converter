import { ChangeEvent } from 'react';
import { ICoins } from '../../types';
import { ON_SELECT, ON_SELECT_CONVERTER, SET_ONCHANGE_INPUT, SET_VALUE_NUMBER, SET_TWO_COIN_NAME } from '../reduxTypes';

export const onSelectAction = (value: string, price: string) => {
	return {
		type: ON_SELECT,
		payload: value,
		price,
	};
};

export const onSelectActionConverter = (value: string, coins: ICoins[]) => {
	return {
		type: ON_SELECT_CONVERTER,
		payload: value,
		coins,
	};
};

export const setOnchangeInput = (event: any, coins: ICoins[]) => {
	return {
		type: SET_ONCHANGE_INPUT,
		event,
		coins,
	};
};

export const onChangeInput = (valueNumber: ChangeEvent<HTMLInputElement>) => {
	return {
		type: SET_VALUE_NUMBER,
		valueNumber: parseFloat(valueNumber.target.value),
	};
};

export const setSelectTwoCoin = (twoCoinName: string, coins: ICoins[]) => {
	console.log(twoCoinName);

	return {
		type: SET_TWO_COIN_NAME,
		twoCoinName,
		coins,
	};
};
