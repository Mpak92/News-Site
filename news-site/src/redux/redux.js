import { combineReducers, createStore } from 'redux';
import mainPageReducer from './mainPageReducer';

const reducers = combineReducers({
    main: mainPageReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;