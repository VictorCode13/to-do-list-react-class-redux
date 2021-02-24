import React, { Component } from 'react';
import './ToDo.css';
import ToDoHeader from './ToDoHeader/ToDoHeader';
import ToDoInputContainer from './ToDoInput/ToDoInputContainer';
import ToDoItem from './ToDoItem/ToDoItem';

export default class ToDo extends Component {
    
    render() {

        const {toDoData, clearList, deleteCurrentTask, toggleCurrentTask, addToDoText, addToDoDate, addTask} = this.props;

        const toDoItems = toDoData.map( item => {
            const {id, ...itemsProps} = item;

            return (
                <li className="list-group-item " key={id}>
                    <ToDoItem {...itemsProps}
                    onDeleted={()=>deleteCurrentTask(id)}
                    onToggleDone={()=>toggleCurrentTask(id)}
                    />
                </li>
            )
        }
    );

        return (
            <div className ="toDoWrapper">
                <ToDoHeader clearList={clearList}/>
                <ToDoInputContainer />
                <ul className="list-group">
                    {toDoItems}
                </ul>
            </div>
        )
        }
    };
