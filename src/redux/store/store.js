// import { devToolsEnhancer } from 'redux-devtools-extension';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducer/index';

export const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(middleware))
);

export default store;
