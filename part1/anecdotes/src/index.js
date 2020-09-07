import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(new Array(props.anecdotes.length).fill(0))


  const addVote = (voteid) =>{
    const copy = [...votes]
    copy[voteid] +=1
    setVotes(copy)
    }

  return (
    <div>
      <h1>
        Today's Anecdote
      </h1>
      {props.anecdotes[selected]}
      <p>This anecdote has {votes[selected]} votes!</p>
      <p>
        <button onClick={()=>setSelected(Math.round(Math.random()*anecdotes.length))}>New Anecdote</button>
      
        <button onClick={()=>addVote(selected)}>Vote!</button>
      </p>
      <MostPopular visible={(votes.reduce((a,b)=>{return a+b})>0) }  mostpopularanecdote = {anecdotes[votes.indexOf(Math.max(...votes))]} count = {Math.max(...votes)}  />
    </div>
  )

}

const MostPopular = ({visible,mostpopularanecdote,count}) => {
  if (visible) {
    return (
      <>
      <h1>Most Popular Anecdote</h1>
      <p>{mostpopularanecdote}</p>
      <p>This anecdote has {count} votes!</p>
      </>
    )
  }
  else{
    return (
      <>
      </>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)