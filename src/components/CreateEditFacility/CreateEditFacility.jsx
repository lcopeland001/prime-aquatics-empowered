import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "../App/App.css";

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
            history.go(-1);
        }
    };

    return (
        <div className="container">
            {id ? <h3> Edit a Facility</h3> : <h3> Add a Facility</h3>}
            <form onSubmit={(event) => completeFacility(event)}>
                <div>
                    <label htmlFor="facilityName">
                        Facility Name:
                        <input
                            type="text"
                            name="facilityName"
                            value={facilityName}
                            onChange={(event) =>
                                setFacilityName(event.target.value)
                            }
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="address">
                        Address:
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="city">
                        City:
                        <input
                            type="text"
                            name="city"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="state">
                        State:
                        <input
                            type="text"
                            name="state"
                            value={state}
                            onChange={(event) => setState(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="zip">
                        Zip:
                        <input
                            type="text"
                            name="zip"
                            value={zip}
                            onChange={(event) => setZip(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="notes">
                        Notes:
                        <input
                            type="text"
                            name="notes"
                            value={notes}
                            onChange={(event) => setNotes(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    {id ? (
                        <input
                            className="btn"
                            type="submit"
                            name="submit"
                            value="Finish Editing Facility"
                        />
                    ) : (
                        <input
                            className="btn"
                            type="submit"
                            name="submit"
                            value="Add Facility"
                        />
                    )}
                </div>
            </form>
        </div>
    );
};

export default CreateEditFacility;
