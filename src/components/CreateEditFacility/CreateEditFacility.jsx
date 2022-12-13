import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "../App/App.css";
import swal from "sweetalert";
// import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CreateEditFacility = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const facility = useSelector((store) => store.facilityDetails);
    const { id } = useParams();

    const [facilityName, setFacilityName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [notes, setNotes] = useState("");

    if (id) {
        useEffect(() => {
            dispatch({
                type: "FETCH_SPECIFIC_FACILITY",
                payload: { id: id },
            });
        }, [id, dispatch]);
    }

    useEffect(() => {
        setFacilityName(facility.facility_name);
        setAddress(facility.street);
        setCity(facility.city);
        setState(facility.state);
        setZip(facility.zip);
        setNotes(facility.notes);
    }, [facility]);

    const completeFacility = (e) => {
        e.preventDefault();
        if (id) {
        swal("Facility Edited", "Success!", "success");
            dispatch({
                type: "PUT_FACILITY",
                payload: {
                    facility_name: facilityName,
                    street: address,
                    city: city,
                    state: state,
                    zip: zip,
                    notes: notes,
                    id: id,
                },
            });
            history.go(-1);
        } else if (!id) {
        swal("Facility Added!", "Success!", "success");
            dispatch({
                type: "POST_FACILITY",
                payload: {
                    facility_name: facilityName,
                    street: address,
                    city: city,
                    state: state,
                    zip: zip,
                    notes: notes,
                },
            });
            history.push("/facilities");
        }
    };

    return (
        <div className="container">
            {id ? <h3> Edit a Facility</h3> : <h3> Add a Facility</h3>}
            <form onSubmit={(event) => completeFacility(event)}>
                <div>
                    <label htmlFor="facilityName">
                        {/* Facility Name: */}
                        <TextField
                            variant="filled"
                            label="Facility Name: "
                            value={facilityName}
                            onChange={(event) =>
                                setFacilityName(event.target.value)
                            }
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="address">
                        {/* Address: */}
                        <TextField
                            variant="filled"
                            label="Address: "
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="city">
                        {/* City: */}
                        <TextField
                            variant="filled"
                            label="City: "
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="state">
                        {/* State: */}
                        <TextField
                            variant="filled"
                            label="State: "
                            value={state}
                            onChange={(event) => setState(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="zip">
                        {/* Zip: */}
                        <TextField
                            variant="filled"
                            label="Zip: "
                            value={zip}
                            onChange={(event) => setZip(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="notes">
                        {/* Notes: */}
                        <TextField
                            variant="filled"
                            label="Notes: "
                            value={notes}
                            onChange={(event) => setNotes(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    {id ? (
                        <Button
                            variant="contained"
                            type="submit"
                            name="submit"
                            value="Finish Editing Facility"
                        >Submit</Button>
                        
                    ) : (
                        <Button
                            
                            variant="contained"
                            type="submit"
                            name="submit"
                            value="Add Facility"
                        >Done</Button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CreateEditFacility;
