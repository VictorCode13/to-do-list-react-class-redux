import React, { Component } from 'react';
import './ToDoHeader.css';

export default class ToDoHeader extends Component {

    onClearList = () => {
        this.props.clearList();
    }

    render () {
        
        return (
            <div className="toDoHeaderWrapper">
                <p> ToDo List</p>
                <button className="btn btn-primary btn-sm"
                onClick={this.onClearList}>
                    Clear list</button>
                <div className="toDoHeadreSign">
                    <span className="toDoHeadreSignFirst">
                        - Задача выполнена
                    </span>
                    <span className="toDoHeadreSignSecond">
                        - Задача не выполнена
                    </span>
                </div>
            </div>
        )
    }
}

