import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/constants/action-types";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const CandidateComponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const history = useHistory();
  const candidates = useSelector((state) => state.ALL_CANDIDATES.candidates);
  console.log(candidates);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    let tempCandidate = JSON.parse(JSON.stringify(candidates));
    let nextID = tempCandidate.length > 0 ? tempCandidate.pop().id + 1 : 0;
    let data = {
      name: name,
      age: age,
      id: nextID,
    };
    dispatch({ type: ActionTypes.SET_CANDIDATE, payload: data });
  };
  useEffect(() => {
    console.log(candidates);
  }, [candidates]);

  const renderList = candidates?.map((candidate) => {
    const { id, name, age } = candidate;
    return (
      <div className="" style={{ width: "40%" }} key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta price">Age : {age}</div>
                <div className="meta">{id}</div>
              </div>
            </div>
          </div>
        </Link>
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
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="age"
          type="text"
          value={age}
          style={{ marginRight: "2em" }}
          onChange={(e) => setAge(e.target.value)}
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
