import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const useAuth = () => {
  const AllCandidates = useSelector((state) => state.ALL_CANDIDATES);
  const currentCandidates = JSON.parse(
    JSON.stringify(AllCandidates.candidates)
  );
  return currentCandidates.length > 0 ? true : false;
};

const PrivateRoute = () => {
  const areCandidatesPresent = useAuth();
  const navigate = useNavigate();

  return areCandidatesPresent ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
