import { createStore, combineReducers } from 'redux';
import testReducer from './test-reducer'
let reducers = combineReducers(
    { testReducer: testReducer }
)

const store = createStore(reducers);

export default store;