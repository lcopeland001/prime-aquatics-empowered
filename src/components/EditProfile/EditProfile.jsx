import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "../App/App.css";
import swal from "sweetalert";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
                        {/* First Name: */}
                        <TextField
                            variant="filled"
                            label="First Name: "
                            type="text"
                            name="firstName"
                            required
                            value={firstName}
                            onChange={(event) =>
                                setFirstName(event.target.value)
                            }
                        ></TextField>
                    </label>
                </div>
                <div>
                    <label htmlFor="lastName">
                        {/* Last Name: */}
                        <TextField
                            variant="filled"
                            label="Last Name: "
                            type="text"
                            name="lastName"
                            required
                            value={lastName}
                            onChange={(event) =>
                                setLastName(event.target.value)
                            }
                        ></TextField>
                    </label>
                </div>
                <div>
                    <label htmlFor="phone">
                        {/* Phone Number: */}
                        <TextField
                            variant="filled"
                            label="Phone Number: "
                            type="text"
                            name="phone"
                            required
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                        ></TextField>
                    </label>
                </div>
                <div>
                    <br />
                    <br />
                    <Button 
                    variant="contained"
                    type="submit"
                    name="submit"
                    value="Finish Editing Profile">
                        Submit
                    </Button>
                       
                </div>
            </form>
        </div>
    );
}

// this allows us to use <App /> in index.js
export default EditProfile;
