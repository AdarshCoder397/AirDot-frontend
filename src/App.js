import "./App.css";
import Header from "./component/layout/Header/Header.jsx";
import Footer from "./component/layout/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Home from './component/Home/Home.jsx'

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: { families: ["Rubik Spray Paint", "Roboto"] },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<><Home /></>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
