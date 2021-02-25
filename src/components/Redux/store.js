import {createStore, combineReducers} from 'redux';
import filterReducer from './filter-reducer';
import todoReducer from './todo-reducer';

let reducers = combineReducers({
    filterMenu: filterReducer,
    todoMenu: todoReducer
})

const persistedState = localStorage.getItem('todo') 
                       ? JSON.parse(localStorage.getItem('todo'))
                       : []
                       
let store = createStore(reducers,
    persistedState
    );

store.subscribe(()=>{
    localStorage.setItem('todo', JSON.stringify(store.getState()))
})

window.store = store;

export default store;

