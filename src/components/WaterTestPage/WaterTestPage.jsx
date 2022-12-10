import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import "../App/App.css";

import "./WaterTestPage.css";

function WaterTestPage() {
    //const WaterTestResults = useSelector( store => store.resultReducer);
    const [ph, setPh] = useState('');
    const [free_cl, setFree_cl] = useState('');
    const [combined_cl, setCombined_cl] = useState('');
    const [total_cl, setTotal_cl] = useState('');
    const [acid, setAcid] = useState('');
    const [base, setBase] = useState('');
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
    const [notes, setNotes] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
   

     const returnHomeButton = () => {
        history.goBack();
        //history.push(`/home/${whatGoesHere}`) //<<<<< ? what goes here!!!
     }

 const submitForm = (e) => {
    e.preventDefault();
  
     dispatch({ type: 'POST_RESULT', payload: { 
        ph,
        free_cl,
        combined_cl,
        total_cl,
        acid,
        base,
        alkalinity,
        hardness, 
        cyanuric_acid,
        copper,
        iron,
        phosphates,
        tds,
        temperature,
        borate,
        salinity,
        notes,
        }, history}); 

};

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
            <p>Base: <input value={alkalinity} onChange={(e) => setAlkalinity(e.target.value)}  type="text"/></p>
            <p>Hardness: <input value={hardness} onChange={(e) => setHardness(e.target.value)}  type="text"/></p>
            <p>Cyanuric Acid: <input value={cyanuric_acid} onChange={(e) => setCyanuric_acid(e.target.value)}  type="text"/></p>
            <p>Copper: <input value={copper} onChange={(e) => setCopper(e.target.value)}  type="text"/></p>
            <p>Iron: <input value={iron} onChange={(e) => setIron(e.target.value)}  type="text"/></p>
            <p>Phosphates: <input value={phosphates} onChange={(e) => setPhosphates(e.target.value)}  type="text"/></p>
            <p>Tds: <input value={tds} onChange={(e) => setTds(e.target.value)}  type="text"/></p>
            <p>Temperature: <input value={temperature} onChange={(e) => setTemperature(e.target.value)}  type="text"/></p>
            <p>Borate: <input value={borate} onChange={(e) => setBorate(e.target.value)}  type="text"/></p>
            <p>Salinity: <input value={salinity} onChange={(e) => setSalinity(e.target.value)}  type="text"/></p>
            <br />
            <br />
            <p>Notes:<input value={notes} onChange={(e) => setNotes(e.target.value)}  type="text"/></p>
            
            

            <input type="submit" />
            
            <br />
            <br />
            <button onClick={returnHomeButton}>Return To Home</button>
        </form>
        </Card>
        </div>
);
//<button onClick={postWaterTest}>Finish Water Test</button>
}

export default WaterTestPage;