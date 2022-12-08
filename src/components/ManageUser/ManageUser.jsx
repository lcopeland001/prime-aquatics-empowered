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

    const [selection, setSelection] = useState("");
    const handleSelection = (e) => {
        setSelection(e.target.value);
    };

    return (
        <div className="container">
            {JSON.stringify(users)}
            <br />
            <br />
            <select onChange={handleSelection}>
                <option value="Select a user"> -- Select a user -- </option>
                {/* Mapping through each fruit object in our fruits array
            and returning an option element with the appropriate attributes / values.
           */}
                {users.map((user) => (
                    <option
                        key={user.id}
                        value={user.id}>
                        {user.id}
                    </option>
                ))}
            </select>
        </div>
    );
}

// this allows us to use <App /> in index.js
export default ManageUser;
