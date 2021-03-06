import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Total = (props) => {
  return (
    <p> Number of Exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}
const CoursePart = (prop) =>{
  return (
    <p>
      {prop.part.name} {prop.part.exercises}
    </p>
  )
}
const Content = (props) =>{
  return (
    <>
<CoursePart part = {props.parts[0]} />
<CoursePart part = {props.parts[1]} />
<CoursePart part = {props.parts[2]} />
    </>
  )
}

const App = () => {
  useState(0)
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises:10
      },
      {
        name: 'Using props to pass data',
        exercises:7
      },
      {
        name: 'State of a component',
        exercises:14
      }
    ]
  }
  
  
  return (
    <div>
      <Header course={course} />
      <Content parts = {course.parts}  />
      <Total parts = {course.parts}  />    
    </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))