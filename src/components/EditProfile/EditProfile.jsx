import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "../App/App.css";
import swal from "sweetalert";

function EditProfile() {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((store) => store.user);

    const { id } = useParams();

    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [phone, setPhone] = useState(user.phone_number);

    useEffect(() => {
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setPhone(user.phone_number);
    }, [user]);

    const updateProfile = (event) => {
        swal("User Updated!", "Success", "success");
        event.preventDefault();
        console.log("Editing profile");
        dispatch({
            type: "PUT_USER_PROFILE",
            payload: {
                id: id,
                first_name: firstName,
                last_name: lastName,
                phone: phone,
            },
        });

        history.push("/user");
    };

    return (
        <div className="container">
            <h2>User ID is {user.id} </h2>
            <form onSubmit={() => updateProfile(event)}>
                <div>
                    <label htmlFor="firstName">
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            required
                            value={firstName}
                            onChange={(event) =>
                                setFirstName(event.target.value)
                            }
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="lastName">
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            required
                            value={lastName}
                            onChange={(event) =>
                                setLastName(event.target.value)
                            }
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="phone">
                        Phone Number:
                        <input
                            type="text"
                            name="phone"
                            required
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <input
                        className="btn"
                        type="submit"
                        name="submit"
                        value="Finish Editing Profile"
                    />
                </div>
            </form>
        </div>
    );
}

// this allows us to use <App /> in index.js
export default EditProfile;
