import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./Pages/InitialPage";

import ErrorPage from "./Pages/ErrorPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
