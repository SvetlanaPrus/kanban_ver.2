import './App.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function DropDownPriority(props) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const newPriority = [1, 2, 3]

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret color="primary" className="btn btn-primary" >
                Change
            </DropdownToggle>
            <DropdownMenu>
                {newPriority.map(el =>
                    <DropdownItem onClick={() => props.changePriority(props.task.id, el)}>{el}</DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    )
}