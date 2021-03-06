import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAgeState } from "../containers/HelperFuncitons";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";
const CandidateListing = () => {
  const [ageState, setAgeState] = useState("");
  const params = useParams();
  const candidateID = params.id;
  const store = useSelector((state) => state.ALL_CANDIDATES);

  const getCandidateDetails = (candidateID) => {
    const allCandidates = store.candidates;
    const candidate = allCandidates.find((e) => e.id == candidateID);
    const callgetState = (candidate) => getAgeState(candidate);
    setAgeState(callgetState(candidate));
  };
  useEffect(() => {
    getCandidateDetails(candidateID);

    /*eslint-disable */
  }, [candidateID]);

  return (
    <>
      <div
        className="display"
        style={{
          margin: "auto",
          backgroundColor: "aqua",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        You are {ageState}
      </div>
    </>
  );
};

export default CandidateListing;
