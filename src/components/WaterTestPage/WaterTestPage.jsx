import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import "../App/App.css";

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
        history.goBack();
        //history.push(`/home/${whatGoesHere}`) //<<<<< ? what goes here!!!
    };

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
                        Ph:{" "}
                        <input
                            value={ph}
                            onChange={(e) => setPh(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        Free Cl:{" "}
                        <input
                            value={free_cl}
                            onChange={(e) => setFree_cl(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        Combined Cl:{" "}
                        <input
                            value={combined_cl}
                            onChange={(e) => setCombined_cl(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        Total Cl:{" "}
                        <input
                            value={total_cl}
                            onChange={(e) => setTotal_cl(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        Acid:{" "}
                        <input
                            value={acid}
                            onChange={(e) => setAcid(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        Base:{" "}
                        <input
                            value={base}
                            onChange={(e) => setBase(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        Alkalinity:{" "}
                        <input
                            value={alkalinity}
                            onChange={(e) => setAlkalinity(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        Hardness:{" "}
                        <input
                            value={hardness}
                            onChange={(e) => setHardness(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        Cyanuric Acid:{" "}
                        <input
                            value={cyanuric_acid}
                            onChange={(e) => setCyanuric_acid(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        Copper:{" "}
                        <input
                            value={copper}
                            onChange={(e) => setCopper(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        Iron:{" "}
                        <input
                            value={iron}
                            onChange={(e) => setIron(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        Phosphates:{" "}
                        <input
                            value={phosphates}
                            onChange={(e) => setPhosphates(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        Tds:{" "}
                        <input
                            value={tds}
                            onChange={(e) => setTds(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        Temperature:{" "}
                        <input
                            value={temperature}
                            onChange={(e) => setTemperature(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        Borate:{" "}
                        <input
                            value={borate}
                            onChange={(e) => setBorate(e.target.value)}
                            type="text"
                        />
                    </p>
                    <p>
                        Salinity:{" "}
                        <input
                            value={salinity}
                            onChange={(e) => setSalinity(e.target.value)}
                            type="text"
                        />
                    </p>
                    
                    <p>
                        Notes:
                        <input
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            type="text"
                        />
                    </p>

                    <input className="btn" type="submit" />

                    <br />
                    <button className="btn" onClick={returnHomeButton}>Return To Home</button>
                </form>
            </Card>
        </div>
    );
    //<button onClick={postWaterTest}>Finish Water Test</button>
}

export default WaterTestPage;
