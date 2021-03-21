import {
	COMPARE_CRYPTO,
	GET_CRYPTO,
	ON_SELECT,
	ON_SELECT_CONVERTER,
	SET_ONCHANGE_INPUT,
	SET_TWO_COIN_NAME,
	SET_VALUE_NUMBER,
} from './redux/reduxTypes';

export interface ICoins {
	fullName: string;
	imageUrl: string;
	name: string;
	price: string;
	capital: string;
	color?: string;
}

export interface IReducerTable {
	payload: ICoins[];
	type: typeof GET_CRYPTO | typeof COMPARE_CRYPTO;
}

export interface IReducerConverter {
	payload: string;
	coins: ICoins[];
	event: string;
	input: number;
	price: string;
	twoCoinName: string;
	type:
		| typeof ON_SELECT
		| typeof SET_ONCHANGE_INPUT
		| typeof ON_SELECT_CONVERTER
		| typeof SET_VALUE_NUMBER
		| typeof SET_TWO_COIN_NAME;
}

export interface IInitialState {
	value: string;
	priceSelectedCoin: number;
	twoCoinName: string;
	priceTwoCoin: number;
}

export interface ITAbleProps {
	coins: ICoins[];
}

export interface ITableCryptoProps {
	coins: ICoins[];
}

export interface IWrapper {
	coins: ICoins[];
	tableAction(): void;
}
