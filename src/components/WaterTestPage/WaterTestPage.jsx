import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import "../App/App.css";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import "./WaterTestPage.css";

function WaterTestPage() {
    //const WaterTestResults = useSelector( store => store.resultReducer);
    const [ph, setPh] = useState(null);
    const [free_cl, setFree_cl] = useState(null);
    const [combined_cl, setCombined_cl] = useState(null);
    const [total_cl, setTotal_cl] = useState(null);
    const [acid, setAcid] = useState(null);
    const [base, setBase] = useState(null);
    const [alkalinity, setAlkalinity] = useState(null);
    const [hardness, setHardness] = useState(null);
    const [cyanuric_acid, setCyanuric_acid] = useState(null);
    const [copper, setCopper] = useState(null);
    const [iron, setIron] = useState(null);
    const [phosphates, setPhosphates] = useState(null);
    const [tds, setTds] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [borate, setBorate] = useState(null);
    const [salinity, setSalinity] = useState(null);
    const [notes, setNotes] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
   

     const returnHomeButton = () => {
        history.push(`/home/${whatGoesHere}`) //<<<<< ? what goes here!!!
     }

    const submitForm = (e) => {
        e.preventDefault();

        dispatch({
            type: "POST_RESULT",
            payload: {
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
            },
            history,
        });
    };

    return (
        <div>
            <Card>
                <h3>Water Test</h3>

                <form onSubmit={submitForm}>
                    <p>
                        {" "}
                        <TextField
                            variant="filled"
                            label="PH: "
                            value={ph}
                            onChange={(e) => setPh(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        {/* Free CL:{" "} */}
                        <TextField
                            variant="filled"
                            label="Free CL: "
                            value={free_cl}
                            onChange={(e) => setFree_cl(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        {/* Combined CL:{" "} */}
                        <TextField
                            variant="filled"
                            label="Combined CL: "
                            value={combined_cl}
                            onChange={(e) => setCombined_cl(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        {/* Total CL:{" "} */}
                        <TextField
                            variant="filled"
                            label="Total CL: "
                            value={total_cl}
                            onChange={(e) => setTotal_cl(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        {/* Acid:{" "} */}
                        <TextField
                            variant="filled"
                            label="Acid: "
                            value={acid}
                            onChange={(e) => setAcid(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        {/* Base:{" "} */}
                        <TextField
                            variant="filled"
                            label="Base: "
                            value={base}
                            onChange={(e) => setBase(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        {/* Alkalinity:{" "} */}
                        <TextField
                            variant="filled"
                            label="Alkalinity: "
                            value={alkalinity}
                            onChange={(e) => setAlkalinity(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        {/* Hardness:{" "} */}
                        <TextField
                            variant="filled"
                            label="Hardness: "
                            value={hardness}
                            onChange={(e) => setHardness(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        {/* Cyanuric Acid:{" "} */}
                        <TextField
                            variant="filled"
                            label="Cyanuric Acid: "
                            value={cyanuric_acid}
                            onChange={(e) => setCyanuric_acid(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        {/* Copper:{" "} */}
                        <TextField
                            variant="filled"
                            label="Copper: "
                            value={copper}
                            onChange={(e) => setCopper(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        {/* Iron:{" "} */}
                        <TextField
                            variant="filled"
                            label="Iron: "
                            value={iron}
                            onChange={(e) => setIron(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        {/* Phosphates:{" "} */}
                        <TextField
                            variant="filled"
                            label="Phosphates: "
                            value={phosphates}
                            onChange={(e) => setPhosphates(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        {/* Tds:{" "} */}
                        <TextField
                            variant="filled"
                            label="Tds: "
                            value={tds}
                            onChange={(e) => setTds(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        {/* Temperature:{" "} */}
                        <TextField
                            variant="filled"
                            label="Temperature: "
                            value={temperature}
                            onChange={(e) => setTemperature(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        {/* Borate:{" "} */}
                        <TextField
                            variant="filled"
                            label="Borate: "
                            value={borate}
                            onChange={(e) => setBorate(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        {/* Salinity:{" "} */}
                        <TextField
                            variant="filled"
                            label="Salinity: "
                            value={salinity}
                            onChange={(e) => setSalinity(e.target.value)}
                            type="text"
                        />
                    </p>
                    
                    <p>
                        {/* Notes: */}
                        <TextField
                            variant="filled"
                            label="Notes: "
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            type="text"
                        />
                    </p>

                    <Button variant="contained" endIcon={<SendIcon />} type="submit" >Submit</Button>
                    <br />
                    <br />
                    <Button variant="contained" color="success" className="btn" onClick={returnHomeButton}>Return To Home</Button>
                    <br />
                </form>
            </Card>
        </div>
    );
    //<button onClick={postWaterTest}>Finish Water Test</button>
}

export default WaterTestPage;
