import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "../store/userReducer";
import { useDispatch } from "react-redux";
import { NotificationManager } from "react-notifications";


function Upadate() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const { name, email } = existingUser[0];
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        NotificationManager.info('Successfully User Updated !');
        navigate('/')

    }

    return (
        <div className="formSection">

            <form onSubmit={handleUpdate}>
                <h3>Update User</h3>
                <label>User Name</label>
                <input type="text" className="inputbox" value={uname} onChange={e => setName(e.target.value)} />


                <label>User email</label>
                <input type="email" className="inputbox" value={uemail} onChange={e => setEmail(e.target.value)} />

                <div className="inputSection">
                    <button className="btn">Update</button>
                </div>
            </form>
        </div>
    )

}

export default Upadate;