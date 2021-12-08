import React from 'react';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const calculateTotal = () => {
    const total = good + neutral + bad;
    return total;
  }

  const calculateAverage = () => {
    const average = (good + neutral + bad) / 3;
    return average;
  }

  return (
    <>
      <h1 className='title'>give feedback!</h1>
      <div className='btn-container'>
        <Button 
          onClick={() => setGood(good + 1)}
          type='button'
          text='good'
        />
        <Button 
          onClick={() => setNeutral(neutral + 1)}
          type='button'
          text='neutral'
        />
        <Button 
          onClick={() => setBad(bad + 1)}
          type='button'
          text='bad'
        />
      </div>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={calculateTotal()}
        average={calculateAverage()}
      />
    </>
  );
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <p className='message'>No feedback given</p>
    );
  } else {
    return (
      <div className='statistics'>
        <h2>statistics</h2>
        <br />
        <StatisticsLine text='good' value={props.good} />
        <StatisticsLine text='neutral' value={props.neutral} />
        <StatisticsLine text='bad' value={props.bad} />
        <StatisticsLine text='all' value={props.all} />
        <StatisticsLine text='average' value={props.average} />
      </div>
    );
  }
}

const StatisticsLine = (props) => {
  return (
    <div>
      <p>{props.text}: <span>{props.value}</span></p>
    </div>
  );
}

const Button = (props) => {
  return (
    <button onClick={props.onClick} type={props.type}>
      {props.text}
    </button>
  );
}

export default App;