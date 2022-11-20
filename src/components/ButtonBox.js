import Card from "./Card";
import classes from "./ButtonBox.module.css";

const ButtonBox = (props) => {
  const numberHandler = () => {
    let randomInt = Math.round(Math.random() * 10000);
    props.onInt(randomInt);
  };

  return (
    <Card>
      <div className={classes.innerButtonBox}>
        <button className={classes.ctaBtn} onClick={numberHandler}>
          Random Number
        </button>
        <button className={classes.ctaBtn}>Random Color</button>
        <button className={classes.ctaBtn}>Random Word</button>
      </div>
    </Card>
  );
};

export default ButtonBox;
