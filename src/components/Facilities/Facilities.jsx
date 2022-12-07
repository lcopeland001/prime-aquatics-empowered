import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useRadioGroup, useScrollTrigger } from '@mui/material';
import UserPage from '../UserPage/UserPage';
import UserProfile from '../UserProfile/UserProfile';

function Facilities() {
    const facilities = useSelector ((store) => store.facilityReducer);

    console.log(facilities);
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    useEffect(() => {
        fetchFacilities();
        
    },[]);

    const fetchFacilities = () => {
        axios.get('/api/facility').then((response) => {
            dispatch({ type: 'SET_FACILITY', payload: response.data})
        }).catch((error) => {
            console.log('Error in facilities.jsx get', error);

        });
    }
    return(
        <div className='container'>
            {/* <p>{JSON.stringify=(facilities)}</p> */}
            
            <h2>Welcome, {user.username}</h2>
                {

                <table className='simpleTable'>
                    <thead>
                        <tr>
                            <th>Facility Name</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            facilities.map((faci)=> {
                                return(
                                    <tr >
                                        <td>{faci.facility_name}</td>
                                        <td>{faci.street}</td>
                                        <td>{faci.city}</td>
                                        <td>{faci.state}</td>
                                        <td>{faci.zip}</td>
                                        <td>{faci.notes}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                }
            
        </div>
    )
}
export default Facilities;