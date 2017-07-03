import { createStore, } from 'redux';
import Reducers from './Reducers';

const configureStore = (preloadedState?) => createStore(
    Reducers,
    preloadedState,
)

export default configureStore;