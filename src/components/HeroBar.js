import Card from "./Card";
import classes from "./HeroBar.module.css";

const HeroBar = () => {
  return (
    <Card>
      <div className={classes.innerHero}>
        <h1 className={classes.heroTitle}>React Random Generator</h1>
        <h3 className={classes.heroSideText}>Generate random stuff</h3>
      </div>
    </Card>
  );
};

export default HeroBar;
