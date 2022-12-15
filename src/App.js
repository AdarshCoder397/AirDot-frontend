import "./App.css";
import Header from "./component/layout/Header/Header.jsx";
import Footer from "./component/layout/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: { families: ["Rubik Spray Paint", "Roboto"] },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
