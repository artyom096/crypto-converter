import 'react-redux';

import { RootState } from '../redux/reducers/rootReducer';

declare module 'react-redux' {
	interface DefaultRootState extends RootState {}
}
