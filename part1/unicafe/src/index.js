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

const FeedbackStatistic = ({name,value}) => {
  return(
    <tr>
    <td>{name}:</td><td>{value}</td>
    </tr>
  )
}
const FeedbackStatistics = ({feedbackTypes}) =>{
  const feedbackTotal = feedbackTypes[0].feedback + feedbackTypes[1].feedback + feedbackTypes[2].feedback
  const feedbackSum = feedbackTypes[0].feedback + feedbackTypes[2].feedback*(-1)
  const positiveFeedbackPercentage = feedbackTypes[0].feedback / feedbackTotal * 100
  if (feedbackTotal == 0) {
    return (<div>
      <h1>Feedback Statistics</h1>
      <p>No Feedback Received</p>
    </div>)
  }
  
  return (
    <div>
      <h1>Feedback Statistics</h1>
      <table>
        <tbody>
        <FeedbackStatistic name = {feedbackTypes[0].name} value = {feedbackTypes[0].feedback} />
      <FeedbackStatistic name = {feedbackTypes[1].name} value = {feedbackTypes[1].feedback} />
      <FeedbackStatistic name = {feedbackTypes[2].name} value = {feedbackTypes[2].feedback} />
      <FeedbackStatistic name = "Total" value = {feedbackTotal} />
      <FeedbackStatistic name = "Average" value=  {(feedbackSum / feedbackTotal).toFixed(2)} />
      <FeedbackStatistic name = "Percent Positive" value = {positiveFeedbackPercentage.toFixed(2) + " %"} />
   
        </tbody>
      </table>


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

