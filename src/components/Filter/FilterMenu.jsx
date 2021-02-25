import React, { Component } from 'react';
import './Filter.css'

export default class FilterMenu extends Component {


    onDateFirstChange = (event) => {
        this.props.addDateFirst(event.target.value)
    };

    onDateSecondChange = (event) => {
        this.props.addDateSecond(event.target.value)
    }

    onTextFilterChange = (event) => {
        this.props.addTextFilter(event.target.value)
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.props.dateFirst && this.props.dateSecond) {
            if(this.props.dateFirst <= this.props.dateSecond) {
                this.onFilterChange(this.props.dateFirst, this.props.dateSecond, this.props.textFilter, this.props.toDoData);
            }
        }
    }

    onClear = () => {
       this.props.clearFilter()
    }

    onFilterChange = (dateFirst, dateSecond, textFilter, toDoData) => {
        
          let arrDates = [];
          let newArr = [];
          let arrFilterDates = [];
  
          toDoData.forEach( (item) => {
              arrDates.push(item.date);
          });
  
          arrDates = arrDates.sort();
          arrDates.forEach( date => {
              if(date >= dateFirst && date <= dateSecond) {
                  arrFilterDates.push(date);
              } 
          });
  
          arrFilterDates.forEach((date)=>{
              toDoData.forEach((item)=>{
                  let textValue = item.description.includes(textFilter);
                  if(date === item.date && textValue) {
                      newArr = [...newArr, item];
                  }
              })
          })
      
          this.props.globalFilterToDoData(newArr);
      }

    render() {
        return (
            <>
            <div className="headerWarpper" onClick={this.onClear}>
                    <button className="btn btn-outline-secondary btn-sm"> Clear filter
                    </button>
                </div>
            <form className="mb-3 filterWrapper" onSubmit={this.onSubmit}>
                <span className="nameFilrer">Filter</span>
                <div className="input-group">
                    <span className="input-group-text">Up</span>
                    <input type="date" className="form-control" 
                    onChange={this.onDateFirstChange}
                    value={this.props.dateFirst}/>    
                </div>
                <div className="input-group">
                    <span className="input-group-text">To</span>
                    <input type="date" className="form-control" 
                    onChange={this.onDateSecondChange}
                    value={this.props.dateSecond}/>
                </div>
                <div className="input-group">
                    <span className="input-group-text">Text</span>
                    <input type="text" className="form-control" 
                    placeholder="type something ..." 
                    onChange={this.onTextFilterChange}
                    value={this.props.textFilter}/>
                </div>
                <button className="btn btn-outline-secondary btn-sm"> Show
                </button>
            </form>
            </>
        )
        }
    }

