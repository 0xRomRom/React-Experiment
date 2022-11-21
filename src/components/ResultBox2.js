import Card from "./Card";
import classes from "./ResultBox2.module.css";

const ResultBox2 = (props) => {
  return (
    <Card>
      <div className={classes.resultModals}>
        <div className={classes.resultModal}>
          <h1 className={classes.numberOutput}>{props.flip}</h1>
          <img src={props.images} className={classes.images}></img>
          <span
            className={classes.tossed}
            style={{ color: props.tossed === 0 ? "black" : "white" }}
          >
            {" "}
            Times Tossed: {props.tossed}
          </span>
        </div>
        <div
          className={classes.resultModal}
          style={{ backgroundColor: props.color }}
        >
          {props.color}
        </div>
        <div className={classes.resultModal}>
          <h1 className={classes.randomWord}>{props.word}</h1>
        </div>
      </div>
    </Card>
  );
};

export default ResultBox2;
