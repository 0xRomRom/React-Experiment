import Card from "./Card";
import classes from "./ButtonBox2.module.css";
import heads from "../img/heads.png";
import tails from "../img/tails.png";

const ButtonBox2 = (props) => {
  const flipHandler = () => {
    props.tossed((prevState) => prevState + 1);
    const odds = Math.random();
    let outcome = "";
    if (odds >= 0.5) {
      outcome = "Heads";
      props.image(heads);
      props.onCoin(outcome);
      return;
    }
    if (odds < 0.5) {
      outcome = "Tails";
      props.image(tails);
      props.onCoin(outcome);
      return;
    }
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
