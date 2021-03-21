import axios from 'axios';
import { Dispatch } from 'redux';
import { ICoins } from '../../types';
import { GET_CRYPTO, COMPARE_CRYPTO } from '../reduxTypes';

export const tableAction = () => {
	return (dispatch: Dispatch) => {
		axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD').then(({ data }) => {
			const coins = data.Data.map((coin: any) => {
				const obj = {
					fullName: coin.CoinInfo.FullName,
					imageUrl: coin.CoinInfo.ImageUrl,
					name: coin.CoinInfo.Name,
					price: coin.DISPLAY.USD.PRICE,
					capital: coin.DISPLAY.USD.MKTCAP,
				};
				return obj;
			});
			dispatch(compareCrypto(coins));
			dispatch(getTable(coins));
		});
	};
};

export const getTable = (coins: ICoins) => {
	return {
		type: GET_CRYPTO,
		payload: coins,
	};
};

export const compareCrypto = (coins: ICoins[] | null) => {
	return {
		type: COMPARE_CRYPTO,
		payload: coins,
	};
};
