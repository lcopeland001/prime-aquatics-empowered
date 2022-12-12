import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function TestHistory() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const pool = useSelector((store) => store.poolDetail);
    const results = useSelector((store) => store.resultReducer);

    const [testDate, setTestDate] = useState(results[0]);

    useEffect(() => {
        dispatch({
            type: "FETCH_POOL",
            payload: { id: id },
        });
        dispatch({
            type: "FETCH_RESULTS_BY_POOL",
            payload: { id: id },
        });
    }, [id, dispatch]);

    const parsedResults = results.map((obj) => (obj.id, obj.recorded_at));

    const timeParser = new Map();

    parsedResults.forEach((timestamp) => {
        const date = new Date(timestamp).toDateString();
        if (!timeParser.has(date)) {
            timeParser.set(date, []);
        }
        timeParser.get(date).push(timestamp);
    });

    const options = [];

    timeParser.forEach((timestamps, date) => {
        options.push(<option value={date}>{date}</option>);
    });

    const chosenDate = (date) => {
        console.log("date is", date);
    };

    return (
        <div>
            <h3>Showing Test History for {pool.name} </h3>
            {/* <h3>{JSON.stringify(testDate)}</h3> */}
            {/* <h3>{JSON.stringify(pool)} </h3> */}
            {/* <h3>{JSON.stringify(parsedResults)}</h3> */}
            <select onChange={(e) => chosenDate(e.target.value)}>
                {options}
            </select>
            <ul>
                {results.map((result) => (
                    <li
                        style={{ listStyle: "none" }}
                        key={result.id}>
                        <button
                            onClick={() =>
                                history.push(`/result/${result.id}`)
                            }>
                            {" "}
                            View
                        </button>
                        {result.recorded_at}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TestHistory;
