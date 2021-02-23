import React, { Component } from 'react';
import './Filter.css'

export default class FilterMenu extends Component {


    state = {
        dateFirst: '',
        dateSecond: '',
        textFilter: ''
    }

    onDateFirstChange = (event) => {
        this.setState({
            dateFirst: event.target.value
        });
    }

    onDateSecondChange = (event) => {
        this.setState({
            dateSecond: event.target.value
        });
    }

    onTextFilterChange = (event) => {
        this.setState({
            textFilter: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.dateFirst && this.state.dateSecond) {
            if(this.state.dateFirst < this.state.dateSecond) {
                this.props.onFilterChange(this.state.dateFirst, this.state.dateSecond, this.state.textFilter);
                // this.setState({
                //     dateFirst: '',
                //     dateSecond: '',
                //     textFilter: ''
                // })
            }
        }
    }

    render() {
        return (
            <form className="mb-3 filterWrapper" onSubmit={this.onSubmit}>
                <span className="nameFilrer">Filter</span>
                <div className="input-group">
                    <span className="input-group-text">Up</span>
                    <input type="date" className="form-control" 
                    onChange={this.onDateFirstChange}
                    value={this.state.dateFirst}/>
                </div>
                <div className="input-group">
                    <span className="input-group-text">To</span>
                    <input type="date" className="form-control" 
                    onChange={this.onDateSecondChange}
                    value={this.state.dateSecond}/>
                </div>
                <div className="input-group">
                    <span className="input-group-text">Text</span>
                    <input type="text" className="form-control" 
                    placeholder="type something ..." 
                    onChange={this.onTextFilterChange}
                    value={this.state.textFilter}/>
                </div>
                <button className="btn btn-outline-secondary btn-sm"> Show
                </button>
            </form>
        )
        }
    }

