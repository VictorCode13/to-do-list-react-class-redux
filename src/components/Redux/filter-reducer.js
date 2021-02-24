const ADD_DATE_FIRST = 'ADD_DATE_FIRST';
const ADD_DATE_SECOND = 'ADD_DATE_SECOND';
const ADD_TEXT_FILTER = 'ADD_TEXT_FILTER';

let initialState = {
    dateFirst: '',
    dateSecond: '',
    textFilter: ''
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATE_FIRST: { 
            return {
            ...state, dateFirst: action.dateFirst
            }
        }
        case ADD_DATE_SECOND: {
            return {
                ...state, dateSecond: action.dateSecond
            }
        }
        case ADD_TEXT_FILTER: {
            return {
                ...state, textFilter: action.textFilter
            }
        }
        default:
        return state;
    }
};

export const addDateFirst = (dateFirst) => ({type: ADD_DATE_FIRST, dateFirst});
export const addDateSecond = (dateSecond) => ({type: ADD_DATE_SECOND, dateSecond});
export const addTextFilter = (textFilter) => ({type: ADD_TEXT_FILTER, textFilter});

export default filterReducer;