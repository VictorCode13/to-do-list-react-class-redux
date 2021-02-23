import React, { Component } from 'react';
import './ToDoInput.css';

export default class ToDoInput extends Component {
    
    state = {
        date: '',
        description: ''
    }

    onTextChange = (event) => {
        this.setState({
            description: event.target.value
        });
    };

    onDateChange = (event) => {
        this.setState({
            date: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.date && this.state.description) {
            this.props.onAddTask(this.state.date, this.state.description);
            this.setState({
                date: '',
                description: ''
            })
        }
    }

    
    render () {
        const {onFilterDate, onFilterDescription} = this.props;

        return (
            <>
                <form className="input-group mb-3" onSubmit={this.onSubmit}>
                    <input type="date" className="form-control" 
                    onChange={this.onDateChange}
                    value={this.state.date}/>
                    <input type="text" className="form-control" 
                    placeholder="add task ..." 
                    onChange={this.onTextChange}
                    value={this.state.description}/>
                    <button className="btn btn-primary btn-sm float-right">
                        Add</button>
                </form>
                <div className="input-filter">
                    <button type="button" 
                            className="btn btn-outline-secondary btn-sm" 
                            onClick={onFilterDate}>
                        <i className="bi bi-funnel"></i>
                    </button>
                    <button type="button" 
                            className="btn btn-outline-secondary btn-sm" 
                            onClick={onFilterDescription}>
                        <i className="bi bi-funnel"></i>
                    </button>
                </div>
            </>
        )
    }
}

