import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Converter } from './components/Converter/Converter';
import TableCryptoWrapper from './components/TableCryptoWrapper';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			padding: 20,
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary,
		},
		td: {
			margin: 10,
		},
		margin: {
			margin: theme.spacing(1),
			width: 200,
		},
		width: {
			width: 70,
		},
		img: {
			width: 40,
		},
	})
);

const App: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={7}>
					<TableCryptoWrapper />
				</Grid>
				<Grid item xs={5}>
					<Converter />
				</Grid>
			</Grid>
		</div>
	);
};

export default App;
