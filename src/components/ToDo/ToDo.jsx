import React, { Component } from 'react';
import './ToDo.css';
import ToDoHeader from './ToDoHeader/ToDoHeader';
import ToDoInput from './ToDoInput/ToDoInput';
import ToDoItem from './ToDoItem/ToDoItem';

export default class ToDo extends Component {
    
    render() {

        const {toDoData, onDeleted, onToggleDone, onAddTask, onClearList, onFilterDate, onFilterDescription} = this.props;

        const toDoItems = toDoData.map( item => {
            const {id, ...itemsProps} = item;

            return (
                <li className="list-group-item " key={id}>
                    <ToDoItem {...itemsProps} 
                    onDeleted={() => onDeleted(id)}
                    onToggleDone={() => onToggleDone(id)}/>
                </li>
            )
        }
    );

        return (
            <div className ="toDoWrapper">
                <ToDoHeader onClearList={onClearList}/>
                <ToDoInput onAddTask = {onAddTask} onFilterDate={onFilterDate} onFilterDescription={onFilterDescription}/>
                <ul className="list-group">
                    {toDoItems}
                </ul>
            </div>
        )
        }
    };
