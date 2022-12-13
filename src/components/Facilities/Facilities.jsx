import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import * as React from 'react';
import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { ListItemIcon } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function Facilities() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const facilities = useSelector((store) => store.facilityReducer);
    const selectedFacility = useSelector((store) => store.defaultFacility);
    const [defaultFacility, setDefaultFacility] = useState(selectedFacility.id);

    useEffect(() => {
        dispatch({ type: "FETCH_FACILITIES", payload: { id: user.id } });
        dispatch({
            type: "FETCH_DEFAULT_FACILITY",
            payload: { id: user.id, facilityId: defaultFacility },
        });
    }, [defaultFacility]);

    const editFacility = (facilityId) => {
        history.push(`/editfacility/${facilityId}`);
    };

    const deleteFacility = (facilityId) => {
        if (confirm("Are you sure you want to delete the selected facility?")) {
            dispatch({
                type: "DELETE_FACILITY",
                payload: { id: facilityId },
            });
        }
    };

    return (
        <div className="container">
            <h4>Address: {selectedFacility.street} </h4>
            <h4>City: {selectedFacility.city} </h4>
            <h4>State: {selectedFacility.state} </h4>
            <h4>Zip Code: {selectedFacility.zip} </h4>
            <h4>Notes: {selectedFacility.notes} </h4>

            <h4>Current Selected Facility: {selectedFacility.facility_name}</h4>
            <Button variant="contained" onClick={() => history.push("/createfacility")}>
                {" "}
                Add a Facility
            </Button>

            <br />
            <br />

            <table className="simpleTable">
                <thead>
                    <tr>
                        <th>Set Default</th>
                        <th>Facility</th>
                        <th>Edit Facility</th>
                        <th>Delete Facility</th>
                    </tr>
                </thead>
                <tbody>
                    {facilities.map((faci) => {
                        return (
                            <tr key={faci.id}>
                                <td>
                                    <Button variant="contained"
                                        onClick={() =>
                                            setDefaultFacility(faci.id)
                                        }>
                                        Set Default
                                    </Button>
                                </td>
                                <td>{faci.facility_name}</td>
                                <td>
                                    <Button variant="outlined" endIcon={<EditOutlinedIcon />}
                                        onClick={() => editFacility(faci.id)}>
                                        Edit
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="outlined" color="error" endIcon={<DeleteIcon />}
                                        onClick={() => deleteFacility(faci.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default Facilities;
