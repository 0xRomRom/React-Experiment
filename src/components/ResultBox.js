import Card from "./Card";
import classes from "./ResultBox.module.css";

const ResultBox = (props) => {
  return (
    <Card>
      <div className={classes.resultModals}>
        <div className={classes.resultModal}>
          <h1 className={classes.numberOutput}>{props.result}</h1>
        </div>
        <div className={classes.resultModal}></div>
        <div className={classes.resultModal}></div>
      </div>
    </Card>
  );
};

export default ResultBox;
