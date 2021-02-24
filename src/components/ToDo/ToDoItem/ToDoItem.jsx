import React, { Component } from 'react';
import './ToDoItem.css';

export default class ToDoItem extends Component {

    render () {

        let classNameWrapper = 'todo-list-item';
        let classNameText = 'toDo-text';

        const {done, date, description, onDeleted, onToggleDone } = this.props;

        if(done) {
            classNameWrapper += ' done';
            classNameText += ' done';
        }

        return (
            <div className={classNameWrapper}>
                <input type="checkbox"  className="form-check-input" 
                onClick={onToggleDone}
                />
                <span className="toDo-date">{date}</span>
                <span className={classNameText}>{description}</span>
                <button type="button" 
                        className="btn btn-outline-danger btn-sm float-end" 
                        onClick={onDeleted}
                        >
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        )
    }
}

