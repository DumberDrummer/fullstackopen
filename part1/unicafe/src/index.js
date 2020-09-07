import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const FeedbackButton = (props) => (<button onClick={props.feedbackHandler}>{props.buttonText}</button>
  )

const FeedbackSubmissions = ({feedbackTypes}) =>{
  return (
    <div>
      <h1>Provide Feedback</h1>
      <FeedbackButton feedbackHandler = {feedbackTypes[0].feedbackHandler} buttonText = {feedbackTypes[0].name} />
      <FeedbackButton feedbackHandler = {feedbackTypes[1].feedbackHandler} buttonText = {feedbackTypes[1].name} />
      <FeedbackButton feedbackHandler = {feedbackTypes[2].feedbackHandler} buttonText = {feedbackTypes[2].name} />
    </div>
  )
}

const FeedbackDisplay = ({name,count}) => {
  return(
    <p>
    {name}: {count}
    </p>
  )
}
const FeedbackStatistics = ({feedbackTypes}) =>{
  return (
    <div>
      <h1>Feedback Statistics</h1>
      <FeedbackDisplay name = {feedbackTypes[0].name} count = {feedbackTypes[0].feedback} />
      <FeedbackDisplay name = {feedbackTypes[1].name} count = {feedbackTypes[1].feedback} />
      <FeedbackDisplay name = {feedbackTypes[2].name} count = {feedbackTypes[2].feedback} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementHandler = (counter,stateSet) => {
    const increment = () => stateSet(counter+1)
    return increment
  }
  const feedbackTypes = [
    {
      name: "Good",
      feedback: good,
      feedbackHandler: incrementHandler(good,setGood)
    },
    {
      name: "Neutral",
      feedback: neutral,
      feedbackHandler: incrementHandler(neutral,setNeutral)
    },
    {
      name: "Bad",
      feedback: bad,
      feedbackHandler: incrementHandler(bad,setBad)
    }
  ]

  return (
    <div>
      <FeedbackSubmissions feedbackTypes = {feedbackTypes} />
      <FeedbackStatistics feedbackTypes = {feedbackTypes} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
);

