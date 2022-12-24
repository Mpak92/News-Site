import { combineReducers, createStore } from 'redux';
import mainPageReducer from './mainPageReducer';
import newsPageReducer from './newsPageREducer';

const reducers = combineReducers({
    main: mainPageReducer,
    news: newsPageReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;