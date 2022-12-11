import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function TestHistory() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const pool = useSelector((store) => store.poolDetail);

    useEffect(() => {
        dispatch({
            type: "FETCH_POOL",
            payload: { id: id },
        });
    }, [id, dispatch]);

    return (
        <div>
            <h3>Showing Test History for Pool </h3>
            <h3>{JSON.stringify(pool)} </h3>
        </div>
    );
}

export default TestHistory;
