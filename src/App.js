import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Form from "./components/Form"
import InvestForm from "./components/NewInvestment";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/invest" element={<InvestForm />} />
      </Routes>
    </Router>
  );
};

export default App;
