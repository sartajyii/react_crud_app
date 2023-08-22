import React, { useState } from "react";
import { addUser } from "../store/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";



function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
        NotificationManager.success('Successfully User Created !');
        navigate('/')

    }

    return (

        <div className="formSection">
            <form onSubmit={handleSubmit}>
                <h3>Add User</h3>
                <label>User Name</label>
                <input type="text" className="inputbox" onChange={e => setName(e.target.value)} />


                <label>User email</label>
                <input type="email" className="inputbox" onChange={e => setEmail(e.target.value)} />

                <div className="inputSection">
                    <button className="btn">Submit</button>
                </div>
            </form>
        </div>
    );
}
export default CreateUser;