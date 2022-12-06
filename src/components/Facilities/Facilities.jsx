import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useRadioGroup } from '@mui/material';
import UserPage from '../UserPage/UserPage';
import UserProfile from '../UserProfile/UserProfile';

function Facilities() {
    const facilities = useSelector (store => store.facilities);
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    useEffect(() => {
        fetchFacilities();
    },[]);
    const fetchFacilities = () => {
        axios.get('/api/facilities').then((response) => {
            dispatch({ type: 'SET_FACILITY', payload: response.data})
        }).catch((error) => {
            console.log('Error in facilities.jsx get', error);

        });
    }
    return(
        <div className='container'>
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
                        {/* {
                            facilities.map((facilities)=> {
                                return(
                                    <tr >
                                        <td>{facilities.facility_name}</td>
                                        <td>{facilities.street}</td>
                                        <td>{facilities.city}</td>
                                        <td>{facilities.state}</td>
                                        <td>{facilities.zip}</td>
                                        <td>{facilities.notes}</td>
                                    </tr>
                                )
                            })
                        } */}
                    </tbody>
                </table>
                }
            
        </div>
    )
}
export default Facilities;