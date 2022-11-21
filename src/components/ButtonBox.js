import Card from "./Card";
import classes from "./ButtonBox.module.css";
const words = require("an-array-of-english-words");
console.log(words);
console.log(words.length);

const ButtonBox = (props) => {
  const numberHandler = () => {
    const randomInt = Math.round(Math.random() * 10000);
    props.onInt(randomInt);
  };

  const colorHandler = () => {
    const randomColor = `rgb(${Math.round(
      Math.random() * 255 + 1
    )}, ${Math.round(Math.random() * 255 + 1)}, ${Math.round(
      Math.random() * 255 + 1
    )})`;
    console.log(randomColor);
    props.onCol(randomColor);
  };

  const wordHandler = () => {
    const randomWord = Math.round(Math.random() * 274937);
    const resultWord =
      words[randomWord].charAt(0).toUpperCase() + words[randomWord].slice(1);
    props.onWord(resultWord);
  };

  return (
    <Card>
      <div className={classes.innerButtonBox}>
        <button className={classes.ctaBtn} onClick={numberHandler}>
          Random Number
        </button>
        <button className={classes.ctaBtn} onClick={colorHandler}>
          Random Color
        </button>
        <button className={classes.ctaBtn} onClick={wordHandler}>
          Random Word
        </button>
      </div>
    </Card>
  );
};

export default ButtonBox;
