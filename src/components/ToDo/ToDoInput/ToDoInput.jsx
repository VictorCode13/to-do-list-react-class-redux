import React, { Component } from 'react';
import './ToDoInput.css';

export default class ToDoInput extends Component {

    onTextChange = (event) => {
        this.props.addToDoText(event.target.value);
    };

    onDateChange = (event) => {
        this.props.addToDoDate(event.target.value);
    }

    
    
    onSubmit = (event) => {
        event.preventDefault();
        if (this.props.date && this.props.description) {
            this.props.addTask(this.props.date, this.props.description);
        }
    }

    toggleProperty(arr, propName) {
        let arrValue = [];
            let newArr =[];
            let copyArr = [...arr];

            copyArr.forEach( (item) => {
                arrValue.push(item[propName])
            });
            arrValue = arrValue.sort();
            
            arrValue.forEach((item)=>{
                copyArr.forEach( (itemInner, indexInner)=>{
                    if (item === itemInner[propName] ) {  
                        newArr = [...newArr, itemInner];
                        copyArr.splice(indexInner, 1)
                    }
                });
            });

            return newArr
    };

    onFilterDate = () => {
        const arr = this.toggleProperty(this.props.toDoData, 'date')
        return this.props.filterToDoData(arr)
    }

    onFilterDescription = () => {
        const arr = this.toggleProperty(this.props.toDoData, 'description')
        return this.props.filterToDoData(arr)
    }
    
    render () {
        const {date, description} = this.props;

        return (
            <>
                <form className="input-group mb-3" onSubmit={this.onSubmit}>
                    <input type="date" className="form-control" 
                    onChange={this.onDateChange}
                    value={date}/>
                    <input type="text" className="form-control" 
                    placeholder="add task ..." 
                    onChange={this.onTextChange}
                    value={description}/>
                    <button className="btn btn-primary btn-sm float-right">
                        Add</button>
                </form>
                <div className="input-filter">
                    <button type="button" 
                            className="btn btn-outline-secondary btn-sm" 
                            onClick={this.onFilterDate}
                            >
                        <i className="bi bi-funnel"></i>
                    </button>
                    <button type="button" 
                            className="btn btn-outline-secondary btn-sm" 
                            onClick={this.onFilterDescription}
                            >
                        <i className="bi bi-funnel"></i>
                    </button>
                </div>
            </>
        )
    }
}

