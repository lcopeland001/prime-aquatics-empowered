import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
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

    -- WRITE FUNCTIONS FOR ROUTES FOR FORM BUTTONS!!!!!!

    // useEffect(()=> { 

    // })

}

// const submitForm = (e) => {
//     e.preventDefault();
//     if (id){
//         dispatch({type: 'EDIT_SKATEPARK', payload: { name, location, space_type, difficulty, photo, id}, history});
//     } else {
//         dispatch({ type: 'ADD_SKATEPARK', payload: { name, location, space_type, difficulty, photo, feature_id: 1}, history}); 
//     }
//     // Pass history with our dispatch so that the saga can redirect
// }

return (
    <div>
    <Card>
        <h3>Water Test</h3>
        
        <form onSubmit={submitForm}>
            <p>Ph: <input value={ph} onChange={(e) => setPh(e.target.value)} type="text"/></p>                
            <p>Free Cl: <input value={free_cl} onChange={(e) => setFree_cl(e.target.value)}  type="text"/></p>
            <p>Combined Cl: <input value={combined_cl} onChange={(e) => setCombined_cl(e.target.value)}  type="text"/></p>
            <p>Total Cl: <input value={total_cl} onChange={(e) => setTotal_cl(e.target.value)} type="text"/></p>
            <p>Acid: <input value={acid} onChange={(e) => setAcid(e.target.value)}  type="text"/></p>
            <p>Base: <input value={base} onChange={(e) => setBase(e.target.value)}  type="text"/></p>
            <p>Hardness: <input value={hardness} onChange={(e) => setHardness(e.target.value)}  type="text"/></p>
            <p>Cyanuric Acid: <input value={cyanuric_acid} onChange={(e) => setCyanuric_acid(e.target.value)}  type="text"/></p>
            <p>Copper: <input value={copper} onChange={(e) => setCopper(e.target.value)}  type="text"/></p>
            <p>Iron: <input value={iron} onChange={(e) => setIron(e.target.value)}  type="text"/></p>
            <p>Phosphates: <input value={phosphates} onChange={(e) => setPhosphates(e.target.value)}  type="text"/></p>
            <p>Tds: <input value={tds} onChange={(e) => setTds(e.target.value)}  type="text"/></p>
            <p>Temperature: <input value={temperature} onChange={(e) => setTemperature(e.target.value)}  type="text"/></p>
            <p>Borate: <input value={borate} onChange={(e) => setBorate(e.target.value)}  type="text"/></p>
            <p>Salinity: <input value={salinity} onChange={(e) => setSalinity(e.target.value)}  type="text"/></p>
            
            

            <input type="submit" />
            <button onClick={postWaterTest}>Finish Water Test</button>
            <br />
            <br />
            <button onClick={returnHomeButton}>Return To Home</button>
        </form>
        </Card>
        </div>
);