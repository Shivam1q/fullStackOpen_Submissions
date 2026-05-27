import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.name}
    </p>
  );
};

const Statistics = (props) => {
  if (props.total === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <>
      <h2>Statistics</h2>
      <StatisticLine text={"good"} name={props.good} />
      <StatisticLine text={"neutral"} name={props.neutral} />
      <StatisticLine text={"bad"} name={props.bad} />
      <StatisticLine text={"total"} name={props.total} />
      <StatisticLine text={"average"} name={props.average} />
      <StatisticLine text={"positive"} name={props.positive} />
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGood = () => {
    const updatedGood = good + 1;
    const updatedTotal = updatedGood + bad + neutral;
    setGood(updatedGood);
    setTotal(updatedTotal);
    setAverage((updatedGood - bad) / updatedTotal);
    setPositive((100 * updatedGood) / updatedTotal);
  };
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    const updatedTotal = good + bad + updatedNeutral;
    setNeutral(updatedNeutral);
    setTotal(updatedTotal);
    setAverage((good - bad) / updatedTotal);
    setPositive((100 * good) / updatedTotal);
  };
  const handleBad = () => {
    const updatedBad = bad + 1;
    const updatedTotal = good + updatedBad + neutral;
    setBad(updatedBad);
    setTotal(updatedTotal);
    setAverage((good - updatedBad) / updatedTotal);
    setPositive((100 * good) / updatedTotal);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text={"good"} />
      <Button onClick={handleNeutral} text={"neutral"} />
      <Button onClick={handleBad} text={"bad"} />
      <br />
      <br />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
