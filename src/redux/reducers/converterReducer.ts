import { ICoins, IInitialState, IReducerConverter } from '../../types';
import { ON_SELECT, ON_SELECT_CONVERTER, SET_ONCHANGE_INPUT, SET_TWO_COIN_NAME } from '../reduxTypes';

const initialState: IInitialState = {
	value: '',
	twoCoinName: 'USD',
	priceSelectedCoin: 0,
	priceTwoCoin: 0,
};

export const converterReducer = (state = initialState, action: IReducerConverter) => {
	switch (action.type) {
		case ON_SELECT: {
			let priceSelectedCoin = action.price.trim().slice(2);
			priceSelectedCoin = priceSelectedCoin.replace(/\,/g, '');

			return {
				...state,
				value: action.payload,
				priceSelectedCoin: Number(priceSelectedCoin),
			};
		}
		case ON_SELECT_CONVERTER:
			const price = action.coins.filter((item: ICoins) => {
				return item.name === action.payload;
			});
			let priceSelectedCoin = price[0].price.trim().slice(2);
			priceSelectedCoin = priceSelectedCoin.replace(/\,/g, '');
			return {
				...state,
				value: action.payload,
				priceSelectedCoin,
			};
		case SET_ONCHANGE_INPUT: {
			let price = action.coins.filter((item: ICoins) => {
				return item.name === state.value;
			});
			let priceSelectedCoin = price[0].price.trim().slice(2);
			priceSelectedCoin = priceSelectedCoin.replace(/\,/g, '');
			return {
				...state,
				priceSelectedCoin,
			};
		}
		case SET_TWO_COIN_NAME: {
			const price = action.coins.filter((item: ICoins) => {
				return item.name === action.twoCoinName;
			});

			let priceTwoCoin = price[0].price.trim().slice(2);
			priceTwoCoin = priceTwoCoin.replace(/\,/g, '');

			return {
				...state,
				twoCoinName: action.twoCoinName,
				priceTwoCoin,
			};
		}
		default:
			return state;
	}
};
