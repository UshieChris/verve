import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
 
import IndexReducer from './redux-flow/reducers';
import rootSaga from './redux-flow/sagas';
 
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
 
const store = createStore(IndexReducer, applyMiddleware(...middlewares));
 
sagaMiddleware.run(rootSaga);
 
export {store};
