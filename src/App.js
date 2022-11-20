import React, { Fragment, useState } from "react";
import HeroBar from "./components/HeroBar.js";
import ButtonBox from "./components/ButtonBox.js";
import ResultBox from "./components/ResultBox.js";

const App = (props) => {
  const [randomInt, setRandomInt] = useState("");

  return (
    <Fragment>
      <HeroBar />
      <ButtonBox onInt={setRandomInt} />
      <ResultBox result={randomInt} />
    </Fragment>
  );
};

export default App;
