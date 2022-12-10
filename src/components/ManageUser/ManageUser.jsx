import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "../App/App.css";

function ManageUser() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: "FETCH_USERS" });
    }, [dispatch]);

    const users = useSelector((store) => store.users);
    const user = useSelector((store) => store.user);

    const handleSelection = (e) => {
        setUserId(e.target.value);
        console.log(userId, userType);
    };

    const [userId, setUserId] = useState("");
    const [userType, setUserType] = useState("");

    const editUserAccess = (e) => {
        e.preventDefault();
        console.log("Editing access");
        dispatch({
            type: "PUT_USER_ACCESS",
            payload: {
                id: userId,
                user_access: userType,
            },
        });
    };

    return (
        <div className="container">
            {JSON.stringify(users)}
            <br />
            <br />

            <h3>
                {" "}
                Currently editing access for {userId}, changing access to:{" "}
                {userType}{" "}
            </h3>
            <select onChange={handleSelection}>
                <option value="Select a user"> -- Select a user -- </option>
                {users.map((user) => (
                    <option
                        key={user.id}
                        value={user.id}>
                        {user.first_name}
                    </option>
                ))}
            </select>
            <br />
            <br />
            <input
                type="radio"
                name="userType"
                value="1"
                onChange={(e) => setUserType(e.target.value)}
            />
            <label htmlFor="Employee">Employee</label>
            <br></br>
            <input
                type="radio"
                name="userType"
                value="2"
                onChange={(e) => setUserType(e.target.value)}
            />
            <label htmlFor="Manager">Manager</label>

            <br />
            <br />

            <button onClick={editUserAccess}>
                {" "}
                Finish Editing User Access{" "}
            </button>
        </div>
    );
}

// this allows us to use <App /> in index.js
export default ManageUser;
