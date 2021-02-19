import './App.css';
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import Board from './Board';

function App() {

    const initialTasks = [
        {
            id: uuidv4(),
            title: 'React',
            description: 'Learn & practice React',
            status: 'In progress',
            priority: 1
        },
        {
            id: uuidv4(),
            title: 'Redux',
            description: 'Learn & practice Redux',
            status: 'To do',
            priority: 2
        },
        {
            id: uuidv4(),
            title: 'HTML',
            description: 'Practice HTML',
            status: 'Done',
            priority: 3
        },
        {
            id: uuidv4(),
            title: 'Javascript',
            description: 'Learn & practice JS',
            status: 'Review',
            priority: 2
        },
        {
            id: uuidv4(),
            title: 'Learn Typescript',
            description: 'Learn & practice TS',
            status: 'To do',
            priority: 1
        }
    ]

    const [tasks, setTasks] = useState(initialTasks)
    const statuses = ['To do', 'In progress', 'Review', 'Done']

    const nextStatus = (status) => statuses[statuses.indexOf(status) + 1]
    const prevStatus = (status) => statuses[statuses.indexOf(status) - 1]

    const plus = (id) => {
        const newList = tasks.map(el => el.id === id ? {...el, status: nextStatus(el.status)} : el)
        setTasks(newList)
    }
    const minus = (id) => {
        const newList = tasks.map(el => el.id === id ? {...el, status: prevStatus(el.status)} : el)
        setTasks(newList)
    }

    const deleteTask = (id) => {
        const newList = tasks.filter(el => el.id !== id)
        setTasks(newList);
    }

    const changePriority = (id, newPriority) => {
        const newTasks = tasks.map(el =>{
                if (id === el.id) return {...el, priority: newPriority};
                return el;
        })
        setTasks(newTasks);
    }

    return (

        <div className="container, myBackground">
            <h1>Kanban - Ver.2</h1>
            <b><hr/></b>
            <div className="row">

                <div className="col-sm">
                    <h2>To do:</h2>
                    <Board className="card" tasks={tasks} status='To do' plus={plus} minus={minus} deleteTask={deleteTask} changePriority={changePriority}/>
                </div>
                <div className="col-sm">
                    <h2>In progress:</h2>
                    <Board tasks={tasks} status='In progress' plus={plus} minus={minus} deleteTask={deleteTask} changePriority={changePriority}/>
                </div>
                <div className="col-sm">
                    <h2>Review:</h2>
                    <Board tasks={tasks} status='Review' plus={plus} minus={minus} deleteTask={deleteTask} changePriority={changePriority}/>
                </div>
                <div className="col-sm">
                    <h2>Done:</h2>
                    <Board tasks={tasks} status='Done' plus={plus} minus={minus} deleteTask={deleteTask} changePriority={changePriority}/>
                </div>

            </div>
        </div>

    )


}

export default App;
