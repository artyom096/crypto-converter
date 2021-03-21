import React, { ChangeEvent, FormEvent, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { ICoins } from '../../types';
import classes from './Converter.module.css';
import { onSelectActionConverter, setSelectTwoCoin } from '../../redux/actions/converterAction';

export const Converter: React.FC = () => {
	const coins: ICoins[] = useSelector((state: any) => state.table.coins);

	const value = useSelector((state: any) => state.converter.value);
	const priceSelectedCoin = useSelector((state: any) => state.converter.priceSelectedCoin);
	const priceTwoCoin = useSelector((state: any) => state.converter.priceTwoCoin);
	const twoCoinName = useSelector((state: any) => state.converter.twoCoinName);

	const dispatch = useDispatch();

	const [input, setInput] = useState(0);

	console.log(value);

	const onChangeSelectTwoCoin = (eventValue: string) => {
		dispatch(setSelectTwoCoin(eventValue, coins));
	};

	return (
		<div className={classes.position}>
			<FormControl className={classes.margin}>
				<TextField
					value={input === 0 ? '' : input}
					onChange={(event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value as any)}
					type="number"
					label="Сумма"
				/>
			</FormControl>
			<FormControl className={classes.marginWidth}>
				<InputLabel shrink id="demo-customized-select-label">
					Валюта
				</InputLabel>
				<Select
					onChange={(event) =>
						dispatch(onSelectActionConverter(event.target.value as string, coins as ICoins[]))
					}
					value={value}
					labelId="demo-customized-select-label"
					id="demo-customized-select"
				>
					<MenuItem id="input" value={value}>
						<em>{value}</em>
					</MenuItem>
					{coins.map((coin, index) => {
						return (
							<MenuItem key={index} value={coin.name}>
								<em>{coin.name}</em>
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
			<FormControl className={classes.margin}>
				<TextField
					value={
						twoCoinName === 'USD'
							? priceSelectedCoin * input
							: ((priceSelectedCoin * input) / priceTwoCoin).toFixed(2)
					}
					type="number"
					label="Сумма"
				/>
			</FormControl>
			<FormControl className={classes.marginWidth}>
				<InputLabel shrink id="demo-customized-select-label">
					Валюта
				</InputLabel>
				<Select
					onChange={(event) => onChangeSelectTwoCoin(event.target.value as string)}
					value={twoCoinName}
					labelId="demo-customized-select-label"
					id="demo-customized-select"
				>
					<MenuItem value="USD">
						<em>USD</em>
					</MenuItem>
					{coins.map((coin, index) => {
						return (
							<MenuItem key={index} value={coin.name}>
								<em>{coin.name}</em>
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</div>
	);
};
