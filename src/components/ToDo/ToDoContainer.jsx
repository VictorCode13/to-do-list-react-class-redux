import ToDo from './ToDo';
import { connect } from 'react-redux';
import {clearList, deleteCurrentTask, toggleCurrentTask} from '../Redux/todo-reducer';

const mapStateToProps = (state) => ({
    toDoData: state.todoMenu.toDoData,
    filterData: state.todoMenu.filterData,
    filter: state.todoMenu.filter
});


export default connect(mapStateToProps, {clearList, deleteCurrentTask, toggleCurrentTask})(ToDo)