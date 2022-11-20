import Card from "./Card";
import classes from "./ButtonBox.module.css";

const ButtonBox = () => {
  return (
    <Card>
      <div className={classes.innerButtonBox}>
        <button className={classes.ctaBtn}>Random Number</button>
        <button className={classes.ctaBtn}>Random Color</button>
        <button className={classes.ctaBtn}>Random Word</button>
      </div>
    </Card>
  );
};

export default ButtonBox;
