import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';


function TestResultPage() {
    const result = useSelector((store) => store.resultReducer)
    console.log(result);
    return(<div></div>)
}

export default TestResultPage;