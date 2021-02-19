import ButtonDelete from "./ButtonDelete";
import './App.css';
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropDownPriority from "./DropDownPriority";

export default function Task(props) {

    const [modal, setModal] = useState(false);

    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{props.task.title}</h3>
                <p className="card-text">{props.task.description} </p>
                <div >

                    <a href="#" onClick={() => setModal(!modal)} className="btn btn-outline-danger">Delete</a>
                    {modal && <ButtonDelete task={props.task} deleteTask={props.deleteTask} modal={modal} setModal={setModal}/>}

                </div>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">Status: {props.task.status}</li>
                <li className="list-group-item"> Priority: {props.task.priority}
                    <DropDownPriority changePriority={props.changePriority} task={props.task}/>
                </li>
            </ul>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                {props.status === 'To do' ?
                    <span className='capsule'>
                    <button className="btn btn-outline-primary" type="button" disabled={true}>Prev.Status</button>
                    </span>
                    :
                    <span className='capsule'>
                    <button className="btn btn-primary" type="button" onClick={() => props.minus(props.task.id)}>Prev.Status</button>
                    </span>
                }
                {props.status === 'Done' ?
                    <span className='capsule'>
                    <button className="btn btn-outline-primary" type="button" disabled={true}>New Status</button>
                    </span>
                    :
                    <span className='capsule'>
                    <button className="btn btn-primary" type="button" onClick={() => props.plus(props.task.id)}>New Status</button>
                    </span>
                }
            </div>
        </div>
    )
}