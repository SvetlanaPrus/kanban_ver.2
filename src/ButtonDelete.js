import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ButtonDelete (props) {

    const {modal, setModal, task} = props;
    const toggle = () => setModal(!modal);

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Are you sure you want to delete this task?</ModalHeader>
            <ModalBody>
                {task.title}: {task.description}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={ () => props.deleteTask(task.id) }>Delete</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}