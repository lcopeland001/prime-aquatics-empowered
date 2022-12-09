import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "../App/App.css";

function ManageUser() {
    const dispatch = useDispatch();
    const history = useHistory();

    const users = useSelector((store) => store.users);
    const userFacilities = useSelector((store) => store.userFacility);
    const facilities = useSelector((store) => store.facilityReducer);
    const user = useSelector((store) => store.user);

    const [userId, setUserId] = useState("");
    const [userType, setUserType] = useState("");
    const [facilityId, setFacilityId] = useState("");

    useEffect(() => {
        dispatch({ type: "FETCH_USERS" });
        dispatch({ type: "FETCH_USER_FACILITY", payload: { id: userId } });
        dispatch({ type: "FETCH_FACILITIES" });
    }, [userId, dispatch]);

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
        dispatch({
            type: "PUT_USER_FACILITY",
            payload: {
                id: userId,
                facility_id: facilityId,
            },
        });
    };

    return (
        <div className="container">
            <h3> These are users</h3>
            {JSON.stringify(users)}

            <br />
            <br />
            <h3> These are facilities the user currently has access to</h3>
            {JSON.stringify(userFacilities)}

            <br />
            <br />

            <h3> These are all facilities</h3>
            {JSON.stringify(facilities)}

            <br />
            <br />

            <h3>
                {" "}
                Currently editing access for {userId}, changing access level to:{" "}
                {userType} , changing access for facility: {facilityId}
            </h3>
            <select onChange={(e) => setUserId(e.target.value)}>
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

            <select onChange={(e) => setFacilityId(e.target.value)}>
                <option value="Select a facility">
                    {" "}
                    -- Select a facility --{" "}
                </option>
                {facilities.map((facility) => (
                    <option
                        key={facility.id}
                        value={facility.id}>
                        {facility.facility_name}
                    </option>
                ))}
            </select>

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
