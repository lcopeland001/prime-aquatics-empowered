import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../App/App.css";
import swal from "sweetalert";

function ManageUser() {
    const dispatch = useDispatch();
    const history = useHistory();

    const users = useSelector((store) => store.users);
    const userFacilities = useSelector((store) => store.userFacility);
    const facilities = useSelector((store) => store.facilityReducer);
    const userDetails = useSelector((store) => store.userDetails);

    const [userId, setUserId] = useState(1);
    const [userAccess, setUserAccess] = useState("");
    const [facilityId, setFacilityId] = useState("");
    const [facilityAccess, setFacilityAccess] = useState("(add or remove)");

    useEffect(() => {
        dispatch({ type: "FETCH_USERS" });
        dispatch({ type: "FETCH_USER_FACILITY", payload: { id: userId } });
        dispatch({ type: "FETCH_FACILITIES" });
        dispatch({ type: "FETCH_USER_DETAIL", payload: { id: userId } });
    }, [userId, dispatch]);

    const editUserAccess = (e) => {
        e.preventDefault();
        console.log("Editing access");
        if (userAccess) {
            dispatch({
                type: "PUT_USER_ACCESS",
                payload: {
                    id: userId,
                    user_access: userAccess,
                },
            });
        }

        dispatch({
            type: "PUT_USER_FACILITY",
            payload: {
                id: userId,
                facility_id: facilityId,
                facilityAccess: facilityAccess,
            },
        });

        history.go(0);
    };

    const deleteUser = () => {
        console.log("In delete aquarium");
        if (confirm("Are you sure you want to delete this user?")) {
            dispatch({
                type: "DELETE_USER",
                payload: { id: userId },
            });
        }
    };

    return (
        <div className="container">
            <h1> Manage User Access Level and Facility Access</h1>
            <h3>
                Currently editing access for {userDetails.first_name}, changing
                access level to: {userAccess}
            </h3>
            <h3>
                Changing facility access for {userDetails.first_name}:{" "}
                {facilityAccess} access for the selected facility.
            </h3>
            <select
                onChange={(e) => {
                    setUserId(e.target.value);
                    // handleSelect(e.target.value);
                }}>
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
                name="userAccess"
                value="1"
                onChange={(e) => setUserAccess(e.target.value)}
            />
            <label htmlFor="Employee">Employee</label>
            <br />
            <input
                type="radio"
                name="userAccess"
                value="2"
                onChange={(e) => setUserAccess(e.target.value)}
            />
            <label htmlFor="Manager">Manager</label>

            <br />
            <br />

            <button onClick={deleteUser}> Delete User </button>

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
            <input
                type="radio"
                name="setFacilityAccess"
                value="add"
                onChange={(e) => setFacilityAccess(e.target.value)}
            />
            <label htmlFor="Add">Add access to facility</label>
            <br></br>
            <input
                type="radio"
                name="setFacilityAccess"
                value="remove"
                onChange={(e) => setFacilityAccess(e.target.value)}
            />
            <label htmlFor="Remove">Remove access to facility</label>
            <br />
            <br />

            <button onClick={editUserAccess}>Finish Editing User Access</button>
        </div>
    );
}

export default ManageUser;
