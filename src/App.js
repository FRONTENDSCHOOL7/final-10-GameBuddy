import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./Components/Commons/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );

}
export default App;
