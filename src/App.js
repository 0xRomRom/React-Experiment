import React, { Fragment, useState } from "react";
import HeroBar from "./components/HeroBar.js";
import ButtonBox from "./components/ButtonBox.js";
import ButtonBox2 from "./components/ButtonBox2.js";
import ResultBox from "./components/ResultBox.js";
import ResultBox2 from "./components/ResultBox2.js";

const App = () => {
  const [randomInt, setRandomInt] = useState("");
  const [randomColor, setRandomColor] = useState("");
  const [randomWord, setRandomWord] = useState("");
  const [coinStatus, setCoinStatus] = useState("");

  return (
    <Fragment>
      <HeroBar />
      <ButtonBox
        onInt={setRandomInt}
        onCol={setRandomColor}
        onWord={setRandomWord}
      />
      <ResultBox result={randomInt} color={randomColor} word={randomWord} />
      <ButtonBox2 onCoin={setCoinStatus} />
      <ResultBox2 flip={coinStatus} />
    </Fragment>
  );
};

export default App;
