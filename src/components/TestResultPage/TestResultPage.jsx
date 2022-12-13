import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";

function TestResultPage() {
  const result = useSelector((store) => store.resultReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  const getPhIndicator = (phValue) => {
    console.log("what is the ph", phValue);
    if (phValue >= 7.7) {
      return <span className="high-value">high</span>;
    } else if (phValue <= 7.1) {
      return <span className="low-value">low</span>;
    } else {
      return <span className="good-value">good</span>;
    }
  };

  const getFree_ClIndicator = (free_ClValue) => {
    if (free_ClValue > 5) {
      return <span className="high-value">high</span>;
    } else if (free_ClValue < 3) {
      return <span className="low-value">low</span>;
    } else {
      return <span className="good-value">good</span>;
    }
  };

  const getCombined_ClIndicator = (combined_ClValue) => {
    if (combined_ClValue > 0.5) {
      return <span className="high-value">high</span>;
    } else if (combined_ClValue <= 0.5) {
      return <span className="good-value">good</span>;
    }
  };

  const getTotal_ClIndicator = (total_ClValue) => {
    if (total_ClValue > 5.2) {
      return <span className="high-value">high</span>;
    } else if (total_ClValue <= 5.2) {
      return <span className="good-value">good</span>;
    }
  };

  const getAlkalinityIndicator = (alkalinityValue) => {
    if (alkalinityValue > 150) {
      return <span className="high-value">high</span>;
    } else if (alkalinityValue < 80) {
      return <span className="low-value">low</span>;
    } else {
      return <span className="good-value">good</span>;
    }
  };

  const getHardnessIndicator = (hardnessValue) => {
    if (hardnessValue > 150) {
      return <span className="high-value">high</span>;
    } else if (hardnessValue < 80) {
      return <span className="low-value">low</span>;
    } else {
      return <span className="good-value">good</span>;
    }
  };

  const getCyanuric_AcidIndicator = (cyanuric_AcidValue) => {
    if (cyanuric_AcidValue > 50) {
      return <span className="high-value">high</span>;
    } else if (cyanuric_AcidValue < 30) {
      return <span className="low-value">low</span>;
    } else {
      return <span className="good-value">good</span>;
    }
  };

  const getCopperIndicator = (copperValue) => {
    if (copperValue > 0.2) {
      return <span className="high-value">high</span>;
    } else if (copperValue <= 0.2) {
      return <span className="good-value">good</span>;
    } else {
      return <span className="good-value">good</span>;
    }
  };

  const getIronIndicator = (ironValue) => {
    if (ironValue > 0.3) {
      return <span className="high-value">high</span>;
    } else if (ironValue <= 0.3) {
      return <span className="good-value">good</span>;
    } else {
      return <span className="good-value">good</span>;
    }
  };

  const getPhosphatesIndicator = (phosphatesValue) => {
    if (phosphatesValue > 1000) {
      return <span className="high-value">high</span>;
    } else if (phosphatesValue <= 1000) {
      return <span className="good-value">good</span>;
    } else {
      return <span className="good-value">good</span>;
    }
  };

  const getTdsIndicator = (tdsValue) => {
    if (tdsValue > 1500) {
      return <span className="high-value">high</span>;
    } else if (tdsValue <= 1500) {
      return <span className="good-value">good</span>;
    } else {
      return <span className="good-value">good</span>;
    }
  };

  const getTemperatureIndicator = (temperatureValue) => {
    if (temperatureValue > 94) {
      return <span className="high-value">high</span>;
    } else if (temperatureValue < 78) {
      return <span className="low-value">low</span>;
    } else {
      return <span className="good-value">good</span>;
    }
  };

  const getBorateIndicator = (borateValue) => {
    if (borateValue > 50) {
      return <span className="high-value">high</span>;
    } else if (borateValue < 30) {
      return <span className="low-value">low</span>;
    } else {
      return <span className="good-value">good</span>;
    }
  };

  const getSalinityIndicator = (salinityValue) => {
    if (salinityValue > 3400) {
      return <span className="high-value">high</span>;
    } else if (salinityValue < 2700) {
      return <span className="low-value">low</span>;
    } else {
      return <span className="good-value">good</span>;
    }
  };

  useEffect(() => {
    dispatch({ type: "FETCH_RESULT", payload: { id } });
  }, [id]);

  return (
    <div className="resultContainer">
      <h1>Test Results</h1>

      {
        //unordered list might look better here
        <ul className="resultList">
          <li>
            <h3>
              pH = {result.ph} {getPhIndicator(result.ph)}
            </h3>
          </li>
          <li>
            <h3>
              free_cl = {result.free_cl} {getFree_ClIndicator(result.free_cl)}
            </h3>
          </li>
          <li>
            <h3>
              combined_cl ={result.combined_cl}{" "}
              {getCombined_ClIndicator(result.combined_cl)}
            </h3>
          </li>
          <li>
            <h3>
              total_cl = {result.total_cl}{" "}
              {getTotal_ClIndicator(result.total_cl)}
            </h3>
          </li>
          <li>
            <h3>acid = {result.acid}</h3>
          </li>
          <li>
            <h3>base = {result.base}</h3>
          </li>
          <li>
            <h3>
              alkalinity = {result.alkalinity}{" "}
              {getAlkalinityIndicator(result.alkalinity)}
            </h3>
          </li>
          <li>
            <h3>
              hardness = {result.hardness}{" "}
              {getHardnessIndicator(result.hardness)}
            </h3>
          </li>
          <li>
            <h3>
              cyanuric_acid = {result.cyanuric_acid}{" "}
              {getCyanuric_AcidIndicator(result.cyanuric_acid)}
            </h3>
          </li>
          <li>
            <h3>
              copper = {result.copper} {getCopperIndicator(result.copper)}
            </h3>
          </li>
          <li>
            <h3>
              iron = {result.iron} {getIronIndicator(result.iron)}
            </h3>
          </li>
          <li>
            <h3>
              phosphates = {result.phosphates}{" "}
              {getPhosphatesIndicator(result.phosphates)}
            </h3>
          </li>
          <li>
            <h3>
              tds = {result.tds} {getTdsIndicator(result.tds)}
            </h3>
          </li>
          <li>
            <h3>
              temperature = {result.temperature}{" "}
              {getTemperatureIndicator(result.temperature)}
            </h3>
          </li>
          <li>
            <h3>
              borate = {result.borate} {getBorateIndicator(result.borate)}
            </h3>
          </li>
          <li>
            <h3>
              salinity = {result.salinity}{" "}
              {getSalinityIndicator(result.salinity)}
            </h3>
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
