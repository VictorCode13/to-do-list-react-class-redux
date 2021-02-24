const FILTER_TODODATA_BY_FILTER_MENU = 'FILTER_TODODATA_BY_FILTER_MENU';
const CLEAR_TO_DO_LIST = 'CLEAR_TO_DO_LIST';
const DELETE_CURRENT_TASK = 'DELETE_CURRENT_TASK';
const TOGGLE_CURRENT_TASK = 'TOGGLE_CURRENT_TASK';

let maxId = 100;

let initialState = {
    toDoData: [
        {done: false, date:'2021-02-24', description:'вынести мусор бб', id: 100 },
        {done: false, date:'2021-02-21', description:'вырвать зуб', id: 101 },
        {done: false, date:'2021-02-22', description:'пукнуть бб', id: 102 },
    ],
    date: '',
    description: ''
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_TODODATA_BY_FILTER_MENU: {
            return {
                ...state, toDoData: action.newToDoData
            }
        }
        case CLEAR_TO_DO_LIST: {
            return {
                ...state, toDoData: []
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
        default:
        return state;
    }
}

export const filterToDoDataByFilterMenu = (newToDoData) => ({type: FILTER_TODODATA_BY_FILTER_MENU, newToDoData});
export const clearList = () => ({type: CLEAR_TO_DO_LIST});
export const deleteCurrentTask = (taskId) => ({type: DELETE_CURRENT_TASK, taskId});
export const toggleCurrentTask = (taskId) => ({type: TOGGLE_CURRENT_TASK, taskId});

export default todoReducer;