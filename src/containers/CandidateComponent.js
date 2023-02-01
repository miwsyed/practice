import React, { useCallback, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setCandidate,
  deleteCandidate,
  updateCandidate,
} from "../redux/actions/candidateActions";
import { isDirty } from "./HelperFuncitons";
const CandidateComponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editClicked, setEditClicked] = useState(false);
  const [submitValue, setSubmitValue] = useState("Submit");
  const [derivedCandidateDetails, setderivedCandidateDetails] = useState({});

  const UseStore = useSelector((state) => state.ALL_CANDIDATES);
  const candidates = useSelector((state) => state.ALL_CANDIDATES.candidates);
  const allCandidates = JSON.parse(JSON.stringify(UseStore.candidates));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitValue === "Submit") {
      console.log("I got shot in submit ");
      let nextID = allCandidates.length > 0 ? allCandidates.pop().id + 1 : 0;
      let data = {
        name: name,
        age: age,
        id: nextID,
      };
      console.log(data);
      dispatch(setCandidate(data));
    } else if (submitValue === "Update") {
      console.log("I got shot in update ");
      //comment added
      let data = {
        name: name,
        age: age,
        id: derivedCandidateDetails.id,
      };
      dispatch(updateCandidate(data));
    }

    setName("");
    setAge("");
  };
  const handleChangeName = (e) => {
    const regex = /^([a-zA-Z\s?]+)$/;
    if (regex.test(e.target.value)) {
      setName(e.target.value);
    } else {
      alert("You have a number,special character in your name???");
    }
  };

  const handleChangeAge = (e) => {
    const regex = /^([\d]+)$/;
    if (regex.test(e.target.value)) {
      setAge(e.target.value);
    } else {
      alert("You have a text,special character in your age??");
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteCandidate(id));
  };

  const handleEdit = (id) => {
    setEditClicked(true);
    setSubmitValue("Update");
    const getCandidateDetails = allCandidates.find((e) => e.id === id);
    setderivedCandidateDetails(getCandidateDetails);
    setName(getCandidateDetails.name);
    setAge(Number(getCandidateDetails.age));
  };

  const callIsDirty = () => isDirty(name, age);

  //Update the localstorage with current subscription
  useEffect(() => {
    localStorage.setItem("candidates", JSON.stringify(candidates));
    setAge("");
    setName("");
    setSubmitValue("Submit");
  }, [candidates]);

  const renderList = candidates?.map((candidate) => {
    const { id, name, age } = candidate;
    return (
      <div className="container bg-blue " style={{ width: "40%" }} key={id}>
        <>
          <div className="p-3">
            <div className="card">
              <div className="content p-3">
                <div className="header">Name : {name}</div>
                <div className="">Age : {age}</div>

                <div className="mt-3">
                  <button
                    style={{ float: "left", padding: "1px 4px" }}
                    onClick={() => navigate(`/candidate/${id}`)}
                  >
                    View
                  </button>
                  <button
                    style={{
                      float: "left",
                      padding: "1px 4px",
                      marginInline: "5px",
                    }}
                    onClick={() => handleEdit(id)}
                  >
                    Edit
                  </button>
                  <img
                    onClick={() => handleDelete(id)}
                    alt="delete"
                    style={{ width: "20px", float: "right", cursor: "pointer" }}
                    src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    );
  });
  return (
    <div className="display" style={{ marginTop: "5em" }}>
      <div
        style={{
          width: "100%",
          margin: "2em 5em",
          diaplay: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            placeholder="name"
            type="text"
            style={{ marginInline: "2em", padding: "2px 3px" }}
            value={name}
            onChange={handleChangeName}
          />
          <input
            id="age"
            placeholder="age"
            type="text"
            value={age}
            style={{ marginInline: "2em", padding: "2px 3px" }}
            onChange={handleChangeAge}
          />
          <button
            type="submit"
            disabled={callIsDirty()}
            style={{ padding: "2px 3px" }}
          >
            {submitValue}
          </button>
        </form>
      </div>
      {candidates && renderList}
      <style>{`
        .display {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          transform: translate(-50%, -50%);
          padding: 2em 5em;
          font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        }
      `}</style>
    </div>
  );
};

export default CandidateComponent;
