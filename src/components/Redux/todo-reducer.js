const FILTER_TODODATA = 'FILTER_TODODATA';
const GLOBAL_FILTER_TODODATA = 'GLOBAL_FILTER_TODODATA';
const CLEAR_TO_DO_LIST = 'CLEAR_TO_DO_LIST';
const DELETE_CURRENT_TASK = 'DELETE_CURRENT_TASK';
const TOGGLE_CURRENT_TASK = 'TOGGLE_CURRENT_TASK';
const ADD_TO_DO_TEXT = 'ADD_TO_DO_TEXT';
const ADD_TO_DO_DATE = 'ADD_TO_DO_DATE';
const ADD_TASK = 'ADD_TASK';
const CLEAR_FILTER = 'CLEAR_FILTER';



let initialState = {
    toDoData: [],
    filterData: [],
    date: '',
    description: '',
    filter: false,
    maxId: 100
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_TODODATA: {
            return {
                ...state, toDoData: action.newToDoData
            }
        }
        case GLOBAL_FILTER_TODODATA: {
            return {
                ...state, filterData: action.newToDoData, filter: true
            }
        }
        case CLEAR_TO_DO_LIST: {
            return {
                ...state, toDoData: [],
                filterData: [],
                filter: false
            }
        }
        case CLEAR_FILTER: {
            return {
                ...state, 
                filterData: [],
                filter: false
            }
        }
        case DELETE_CURRENT_TASK: {
            const idx = state.toDoData.findIndex(el => el.id === action.taskId);
            const newArr = [...state.toDoData.slice(0, idx), ...state.toDoData.slice(idx + 1)];
            return {
                ...state, toDoData: newArr
            }
        }
        case TOGGLE_CURRENT_TASK: {
            const idx = state.toDoData.findIndex(el => el.id === action.taskId);
            const oldTask = state.toDoData[idx];
            const newTask = {...oldTask, done: !oldTask.done };
            const newArr = [...state.toDoData.slice(0, idx), newTask, ...state.toDoData.slice(idx + 1)];
            return {
                ...state, toDoData: newArr
            }
        }
        case ADD_TO_DO_DATE: {
            return {
                ...state, date: action.dateTask
            }
        }
        case ADD_TO_DO_TEXT: {
            return {
                ...state, description: action.textTask
            }
        }
        case ADD_TASK: {
            let task = {
                done: false,
                date: action.date,
                description: action.description,
                id: ++state.maxId
            }
            return {
                ...state, toDoData: [...state.toDoData, task],
                date: '',
                description: ''
            }
        }
        default:
        return state;
    }
}

export const filterToDoData = (newToDoData) => ({type: FILTER_TODODATA, newToDoData});
export const globalFilterToDoData = (newToDoData) => ({type: GLOBAL_FILTER_TODODATA, newToDoData});
export const clearList = () => ({type: CLEAR_TO_DO_LIST});
export const clearFilter = () => ({type: CLEAR_FILTER});
export const deleteCurrentTask = (taskId) => ({type: DELETE_CURRENT_TASK, taskId});
export const toggleCurrentTask = (taskId) => ({type: TOGGLE_CURRENT_TASK, taskId});
export const addToDoText = (textTask) => ({type: ADD_TO_DO_TEXT, textTask});
export const addToDoDate = (dateTask) => ({type: ADD_TO_DO_DATE, dateTask});
export const addTask = (date, description) => ({type: ADD_TASK, date, description});

export default todoReducer;