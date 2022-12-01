import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function WaterTestPage() {
    const WaterTestResults = useSelector( store => store.resultReducer);
    const [ph, setPh] = useState('');
    const [free_cl, setfFree_cl] = useState('');
    const [combined_cl, setCombined_cl] = useState('');
    const [total_cl, setTotal_cl] = useState('');
    const [acid, setAcid] = useState('');
    const [base, setbase] = useState('');
    const [alkalinity, setAlkalinity] = useState('');
    const [hardness, setHardness] = useState('');
    const [cyanuric_acid, setCyanuric_acid] = useState('');
    const [copper, setCopper] = useState('');
    const [iron, setIron] = useState('');
    const [phosphates, setPhosphates] = useState('');
    const [tds, setTds] = useState('');
    const [temperature, setTemperature] = useState('');
    const [borate, setBorate] = useState('');
    const [salinity, setSalinity] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(()=> {

    })

}