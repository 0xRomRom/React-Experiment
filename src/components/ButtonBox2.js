import Card from "./Card";
import classes from "./ButtonBox.module.css";

const ButtonBox2 = (props) => {
  const flipHandler = () => {
    const odds = Math.random();
    const outcome = odds >= 0.5 ? "Heads" : "Tails";
    props.onCoin(outcome);
  };

  const colorHandler = () => {};

  const wordHandler = () => {};

  return (
    <Card>
      <div className={classes.innerButtonBox}>
        <button className={classes.ctaBtn} onClick={flipHandler}>
          Coin Flip
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

export default ButtonBox2;
