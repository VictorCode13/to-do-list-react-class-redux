import React, { Component } from 'react';
import Header from '../Header/Header';
import ToDo from '../ToDo/ToDo';
import Filter from '../Filter/Filter';
import './App.css';

export default class App extends Component {
    
    maxId = 100;

    state = {
        toDoData: [
            // this.createToDoTask('2021-02-21', 'вынести мусор'),
            // this.createToDoTask('2021-02-18', 'вырвать зуб'),
            // this.createToDoTask('2021-02-17', 'заправить машину')
        ],
        dateFirst: '',
        dateSecond: '',
        textFilter: ''
    };

    createToDoTask(date = null, description) {
        return {
            done: false,
            date,
            description,
            id: this.maxId++
        }
    }

    onDeleted = (id) => {
        this.setState(({toDoData}) => {
            const idx = toDoData.findIndex(el => el.id === id);
            const newArr = [...toDoData.slice(0, idx), ...toDoData.slice(idx + 1)];
            return {toDoData: newArr }
        })
    }

    onClearList = () => {
        this.setState(({toDoData}) => {
            const newArr = [];
            return {toDoData: newArr }
        })
    }

    onAddTask = ( date, text) => {
        const newTask = this.createToDoTask(date, text);

        this.setState( ({toDoData}) => {
                const newArr = [...toDoData, newTask];
                return { toDoData: newArr }
            }
        )
    }

    onToggleDone = (id) => {
        this.setState( ({toDoData})=> {
            const idx = toDoData.findIndex(el => el.id === id);
            const oldTask = toDoData[idx];
            const newTask = {...oldTask, done: !oldTask.done };
            const newArr = [...toDoData.slice(0, idx), newTask, ...toDoData.slice(idx + 1)];
            return {
                toDoData: newArr
            }
        })
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

    onFilterDescription = () => {
        this.setState(({toDoData}) => {
            return {
                    toDoData: this.toggleProperty(toDoData, 'description')
                }
        });
    };

    onFilterDate = () => {
        this.setState(({toDoData}) => {
            return {
                    toDoData: this.toggleProperty(toDoData, 'date')
                }
        });
    };

    onFilterChange = (dateFirst, dateSecond, textFilter) => {
        this.setState(({toDoData})=>{
            let arrDates = [];
            let newArr = [];
            let arrFilterDates = [];
            let [...newToDoData] = toDoData;

            newToDoData.forEach( (item) => {
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

            return {
                toDoData: newArr
            }
        })
    }

render () {

    return (
        <div className="main">
            <Header />
            <Filter onFilterChange={this.onFilterChange}/>
            <ToDo toDoData = {this.state.toDoData} 
                onDeleted = {this.onDeleted} 
                onAddTask={this.onAddTask}
                onToggleDone={this.onToggleDone}
                onClearList={this.onClearList}
                onFilterDate={this.onFilterDate}
                onFilterDescription={this.onFilterDescription}/>
        </div>
    )
};
};


