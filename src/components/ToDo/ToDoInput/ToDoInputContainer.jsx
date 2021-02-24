import ToDoInput from './ToDoInput';
import { connect } from 'react-redux';
import {addToDoText, addToDoDate, addTask, filterToDoData} from '../../Redux/todo-reducer';

const mapStateToProps = (state) => ({
    toDoData: state.todoMenu.toDoData,
    date: state.todoMenu.date,
    description: state.todoMenu.description
});


export default connect(mapStateToProps, {addToDoText, addToDoDate, addTask, filterToDoData})(ToDoInput)