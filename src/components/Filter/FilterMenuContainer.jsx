import './Filter.css';
import FilterMenu from './FilterMenu';
import { connect } from 'react-redux';
import {addDateFirst, addDateSecond, addTextFilter} from '../Redux/filter-reducer';
import {globalFilterToDoData, filterToDoData, clearFilter} from '../Redux/todo-reducer';

const mapStateToProps = (state) => ({
    dateFirst: state.filterMenu.dateFirst,
    dateSecond: state.filterMenu.dateSecond,
    textFilter: state.filterMenu.textFilter,
    toDoData: state.todoMenu.toDoData
});


export default connect(mapStateToProps, {addDateFirst, addDateSecond, addTextFilter, globalFilterToDoData, filterToDoData, clearFilter})(FilterMenu)