import React from "react";
import { Navigate } from "react-router-dom";

function MainFeedPage() {
  return localStorage.getItem("token") ? <div>메인페이지</div> : <Navigate to="/login" />
}

export default MainFeedPage;
