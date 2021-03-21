import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { compareCrypto, tableAction } from '../redux/actions/tableAction';
import { ICoins, IWrapper } from '../types';
import { TableCrypto } from './TableCrypto/TableCrypto';

class TableCryptoWrapper extends React.Component<IWrapper> {
	componentDidMount() {
		if (this.props.coins) {
			this.props.tableAction();
			setInterval(() => {
				this.props.tableAction();
			}, 20000);
		}
	}

	componentDidUpdate(prevProps: any): void {
		prevProps.coins.map((coin: ICoins, index: number) => {
			if (coin.price > this.props.coins[index].price) {
				this.props.coins[index].color = 'green';
				compareCrypto(this.props.coins);
			} else if (coin.price < this.props.coins[index].price) {
				this.props.coins[index].color = 'red';
				compareCrypto(this.props.coins);
			}
		});
	}

	render() {
		return <TableCrypto coins={this.props.coins} />;
	}
}

function mapStateToProps(state: any) {
	return {
		coins: state.table.coins,
	};
}

function mapDispatchToProps(dispatch: Dispatch<any>, coins: any) {
	return {
		tableAction: () => dispatch(tableAction()),
		compareCrypto: () => dispatch(compareCrypto(coins)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TableCryptoWrapper);
