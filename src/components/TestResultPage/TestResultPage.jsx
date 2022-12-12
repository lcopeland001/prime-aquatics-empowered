import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";

function TestResultPage() {
  const result = useSelector((store) => store.resultReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: "FETCH_RESULT", payload: { id } });
  }, [id]);

  return (
    <div className="resultContainer">
      <h1>Test Results</h1>
      {JSON.stringify(result)}
      {
        //unordered list might look better here
        <ul className="resultList">
          <li>
            <h3>pH = {result.ph}</h3>
          </li>
          <li>
            <h3>free_cl = {result.free_cl}</h3>
          </li>
          <li>
            <h3>combined_cl ={result.combined_cl}</h3>
          </li>
          <li>
            <h3>total_cl = {result.total_cl}</h3>
          </li>
          <li>
            <h3>acid = {result.acid}</h3>
          </li>
          <li>
            <h3>base = {result.base}</h3>
          </li>
          <li>
            <h3>alkalinity = {result.alkalinity}</h3>
          </li>
          <li>
            <h3>hardness = {result.hardness}</h3>
          </li>
          <li>
            <h3>cyanuric_acid = {result.cyanuric_acid}</h3>
          </li>
          <li>
            <h3>copper = {result.copper}</h3>
          </li>
          <li>
            <h3>iron = {result.iron}</h3>
          </li>
          <li>
            <h3>phosphates = {result.phosphates}</h3>
          </li>
          <li>
            <h3>tds = {result.tds}</h3>
          </li>
          <li>
            <h3>temperature = {result.temperature}</h3>
          </li>
          <li>
            <h3>borate = {result.borate}</h3>
          </li>
          <li>
            <h3>salinity = {result.salinity}</h3>
          </li>
          <li>
            <h3>notes: {result.notes}</h3>
          </li>
        </ul>
      }
    </div>
  );
}

export default TestResultPage;
