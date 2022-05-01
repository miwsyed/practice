import React, { useEffect, useState } from "react";
import "./styles.css";
const CandidateListing = () => {
  // const [age, setAge] = useState("");
  // const [stage, setStage] = useState("");

  // useEffect(() => {
  //   setAge(state.find((e) => e.age).age);
  //   /* eslint-disable */
  // }, []);

  // const CallGetStage = () => getStage(age);

  // useEffect(() => {
  //   setStage(CallGetStage());
  // }, [age]);
  return (
    <>
      <div
        className="display"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        You are a
      </div>
    </>
  );
};

export default CandidateListing;
