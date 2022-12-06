import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "../App/App.css";

function UserProfile() {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((store) => store.user);

    const editProfile = (profile) => {
        history.push(`/edit/${user.id}`);
    };

    return (
        <div className="container">
            <h2>Username: {user.username}</h2>
            <h2>First Name: {user.first_name}</h2>
            <h2>Last Name: {user.last_name}</h2>
            <h2>Phone Number: {user.phone_number}</h2>
            <br />
            <button
                type="button"
                className="btn"
                onClick={() => editProfile(user)}>
                Edit Profile
            </button>
        </div>
    );
}

// this allows us to use <App /> in index.js
export default UserProfile;
