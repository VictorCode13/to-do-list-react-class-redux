import {createStore, combineReducers} from 'redux';
import filterReducer from './filter-reducer';
import todoReducer from './todo-reducer';

let reducers = combineReducers({
    filterMenu: filterReducer,
    todoMenu: todoReducer
})

let store = createStore(reducers);

window.store = store;

export default store;