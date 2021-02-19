import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './Task.js'


export default function Board(props) {

    return (
        <div>
            {props.tasks
                .filter(el => el.status === props.status)
                .sort((a, b) => a.priority - b.priority)
                .map(el => <Task task={el} plus={props.plus} minus={props.minus} tasks={props.tasks}
                                 status={props.status} priority={props.priority} deleteTask={props.deleteTask}
                                 changePriority={props.changePriority}/>)
            }
        </div>
    )
}