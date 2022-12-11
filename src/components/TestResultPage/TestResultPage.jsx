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
        <table className="resultTable">
          <thead>
            <tr>
              <th>pH</th>
              <th>free_cl</th>
              <th>combined_cl</th>
              <th>total_cl</th>
              <th>acid</th>
              <th>base</th>
              <th>alkalinity</th>
              <th>hardness</th>
              <th>cyanuric_acid</th>
              <th>copper</th>
              <th>iron</th>
              <th>phosphates</th>
              <th>tds</th>
              <th>temperature</th>
              <th>borate</th>
              <th>salinity</th>
              <th>notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{result.ph}</td>
              <td>{result.free_cl}</td>
              <td>{result.combined_cl}</td>
              <td>{result.total_cl}</td>
              <td>{result.acid}</td>
              <td>{result.base}</td>
              <td>{result.alkalinity}</td>
              <td>{result.hardness}</td>
              <td>{result.cyanuric_acid}</td>
              <td>{result.copper}</td>
              <td>{result.iron}</td>
              <td>{result.phosphates}</td>
              <td>{result.tds}</td>
              <td>{result.temperature}</td>
              <td>{result.borate}</td>
              <td>{result.salinity}</td>
              <td>{result.notes}</td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
}

export default TestResultPage;
