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
    <>
    <div>Test Results</div>

       { result.map(tomato => {
        return (<div key={ tomato.id }>
        <h2> Test Result By ID </h2>
        <h2> {tomato.ph}</h2>
        {JSON.stringify(tomato)}
        {/* TODO: create components to render each 
        test result eg. tomato.ph, tomato.free_cl */}
        </div>
        )
       })
       
       }
       </>
    );
}

export default TestResultPage;