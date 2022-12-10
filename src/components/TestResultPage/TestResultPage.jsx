import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';


function TestResultPage() {
    const result = useSelector((store) => store.resultReducer)
    const dispatch = useDispatch();
    console.log("What is this?",result);
    

    useEffect (() => {
        dispatch ({ type: 'FETCH_RESULT' });
    }, []);

    return (
        <div className='resultContainer'>
    <h1>Test Results</h1>
    {
    <table className='resultTable'>
            <thead>
                <tr>
                    <th>pH</th>
                    <th>free_cl</th>
                    <th>combined_cl</th>
                    <th>total_cl</th>
                    <th>acid</th>
                    <th>base</th>
                    <th>alkalinity</th>
                    <th>hardness</th>
                    <th>cyanuric_acid</th>
                    <th>copper</th>
                    <th>iron</th>
                    <th>phosphates</th>
                    <th>tds</th>
                    <th>temperature</th>
                    <th>borate</th>
                    <th>salinity</th>
                    <th>notes</th>
                </tr>
            </thead>
                <tbody>

            

                        { result.map((troy => {
                            return (
            
        
                                <tr>
                                    <td>{troy.ph}</td>
                                    <td>{troy.free_cl}</td>
                                    <td>{troy.combined_cl}</td>
                                    <td>{troy.total_cl}</td>
                                    <td>{troy.acid}</td>
                                    <td>{troy.base}</td>
                                    <td>{troy.alkalinity}</td>
                                    <td>{troy.hardness}</td>
                                    <td>{troy.cyanuric_acid}</td>
                                    <td>{troy.copper}</td>
                                    <td>{troy.iron}</td>
                                    <td>{troy.phosphates}</td>
                                    <td>{troy.tds}</td>
                                    <td>{troy.temperature}</td>
                                    <td>{troy.borate}</td>
                                    <td>{troy.salinity}</td>
                                    <td>{troy.notes}</td>
                                </tr>
        
                            )
                        })
                    )}
                </tbody>
            </table>
        }
    
       </div>
       
    );
}

export default TestResultPage;