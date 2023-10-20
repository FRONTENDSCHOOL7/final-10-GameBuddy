import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import tokenValidAPI from "../API/tokenValidAPI"

function MainFeedPage() {
  const [tokenValid, setTokenValid] = useState(true);

  tokenValidAPI(setTokenValid)

  return tokenValid ? <div>메인페이지</div> : <Navigate to="/login" />
}

export default MainFeedPage;
