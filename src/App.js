import React from "react";
import "./styles/App.scss";
import { Time } from "./components/Time/Time";
import { Position } from "./components/Position/Position";
import { Members } from "./components/Members/Members";

function App() {
  return (
    <div className="_container">
      <div className="App">
        <div id="PositionComponent">
          <Position />
        </div>
        <div className="wrapper">
          <Time />
        </div>
        <div className="wrapper">
          <Members />
        </div>
      </div>
    </div>
  );
}

export default App;
