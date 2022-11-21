import Card from "./Card";
import classes from "./ResultBox.module.css";

const ResultBox2 = (props) => {
  return (
    <Card>
      <div className={classes.resultModals}>
        <div className={classes.resultModal}>
          <h1 className={classes.numberOutput}>{props.flip}</h1>
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
