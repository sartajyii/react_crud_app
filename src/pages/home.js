import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../store/userReducer";
import { NotificationManager } from "react-notifications";


function Home() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }));
        NotificationManager.warning('Successfully User Deleted !');
    }

    return (
        <div className="main">
            <Link to="/create" className="btn craete">Create +</Link>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className="btn edit">Edit</Link>

                                <button className="btn delete" onClick={() => handleDelete(user.id)}>Delete</button>

                            </td>
                        </tr>

                    ))}

                </tbody>
            </table>
        </div >

    );
}
export default Home;