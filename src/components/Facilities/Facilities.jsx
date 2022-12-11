import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Facilities() {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const facilities = useSelector((store) => store.facilityReducer);
    const selectedFacility = useSelector((store) => store.defaultFacility);
    const [defaultFacility, setDefaultFacility] = useState(selectedFacility.id);

    useEffect(() => {
        dispatch({ type: "FETCH_FACILITIES", payload: { id: user.id } });
        dispatch({
            type: "FETCH_SPECIFIC_FACILITY",
            payload: { id: user.id, facilityId: defaultFacility },
        });
    }, [defaultFacility]);

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
            <p>Current selected facility: {selectedFacility.facility_name}</p>

            <br />
            <br />

            <table className="simpleTable">
                <thead>
                    <tr>
                        <th>Set Default</th>
                        <th>Facility</th>
                        <th>View More Details</th>
                        <th>Edit Facility</th>
                        <th>Delete Facility</th>
                    </tr>
                </thead>
                <tbody>
                    {facilities.map((faci) => {
                        return (
                            <tr key={faci.id}>
                                <td>
                                    <button
                                        onClick={() =>
                                            setDefaultFacility(faci.id)
                                        }>
                                        Set Default
                                    </button>
                                </td>
                                <td>{faci.facility_name}</td>
                                <td>
                                    <button>View</button>
                                </td>
                                <td>
                                    <button>Edit</button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => deleteFacility(faci.id)}>
                                        Delete
                                    </button>
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
