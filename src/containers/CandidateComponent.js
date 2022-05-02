import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCandidate } from "../redux/actions/candidateActions";
const CandidateComponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const UseStore = useSelector((state) => state.ALL_CANDIDATES);
  const candidates = useSelector((state) => state.ALL_CANDIDATES.candidates);
  const dispatch = useDispatch();
  const allCandidates = JSON.parse(JSON.stringify(UseStore.candidates));
  const navigate = useNavigate();

  const handleSubmit = () => {
    let nextID = allCandidates.length > 0 ? allCandidates.pop().id + 1 : 0;
    let data = {
      name: name,
      age: age,
      id: nextID,
    };
    dispatch(setCandidate(data));
  };
  const handleChangeName = (e) => {
    const regex = /^([a-zA-Z]+)$/;
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

  const renderList = candidates?.map((candidate) => {
    const { id, name, age } = candidate;
    return (
      <div className="" style={{ width: "40%" }} key={id}>
        <>
          <div
            onClick={() => navigate(`/candidate/${id}`)}
            className="ui link cards"
          >
            <div className="card">
              <div className="content">
                <div className="header">Name : {name}</div>
                <div className="meta price">Age : {age}</div>
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
        <input
          placeholder="name"
          type="text"
          style={{ marginInline: "2em" }}
          value={name}
          onChange={handleChangeName}
        />
        <input
          placeholder="age"
          type="text"
          value={age}
          style={{ marginRight: "2em" }}
          onChange={handleChangeAge}
        />
        <button onClick={handleSubmit} style={{ padding: "2px 5px" }}>
          Submit
        </button>
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
