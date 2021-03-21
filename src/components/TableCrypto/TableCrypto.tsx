import React, { Dispatch } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import classes from './TableCrypto.module.css';

import { useDispatch } from 'react-redux';
import { onSelectAction } from '../../redux/actions/converterAction';
import { ICoins, ITableCryptoProps } from '../../types';

export const TableCrypto: React.FC<ITableCryptoProps> = ({ coins }) => {
	const dispatch: Dispatch<any> = useDispatch();

	const colors: any = {
		green: '#9eff72',
		red: '#ff1d3c',
	};

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell></TableCell>
						<TableCell align="center">FullName</TableCell>
						<TableCell align="center">Name</TableCell>
						<TableCell align="center">Price</TableCell>
						<TableCell align="center">MarketCap</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{coins.map((coin: ICoins) => (
						<TableRow
							hover
							onClick={() => dispatch(onSelectAction(coin.name, coin.price))}
							className={classes.row}
							key={coin.fullName}
						>
							<TableCell component="th" scope="row">
								<img
									style={{ width: '40px' }}
									src={`https://www.cryptocompare.com${coin.imageUrl}`}
									alt={coin.name}
								/>
							</TableCell>
							<TableCell align="center">{coin.fullName}</TableCell>
							<TableCell align="center">{coin.name}</TableCell>
							<TableCell style={{ backgroundColor: coin.color ? colors[coin.color] : '' }} align="center">
								{coin.price}
							</TableCell>
							<TableCell align="center">{coin.capital}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
