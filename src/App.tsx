import React, { useState } from "react";
import LaunchContainer from "./components/LaunchIndex";
import LaunchDetailsContainer from "./components/LaunchDetails";
import Launch from "./components/Launch/Launch";
import Home from "./components/home/Home";
import AppBar1 from "./components/AppBar/AppBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const App = () => {
  let [index, setIndex] = useState(1);
  function passIndex(getInd: number) {
    setIndex(getInd);
  }
  return (
    <div className="App">
      <AppBar1 />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Launch" element={<Launch />}>
            <Route
              path="/"
              element={<LaunchContainer passIndex={passIndex} />}
            />
            <Route
              path=":slug"
              element={<LaunchDetailsContainer index={index} />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
