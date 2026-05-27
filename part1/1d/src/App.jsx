import { useState } from "react";

const Statistics = (props) => {
  return (
    <>
      <h2>Statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>total {props.total}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
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
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
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
