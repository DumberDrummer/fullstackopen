import React from 'react'

const Course = ({course})=>{
return(
    <div>
        <Header name={course.name}></Header>
        <Content parts = {course.parts}></Content>
        <Totals parts = {course.parts} />
    </div>
)
}

const Header = ({name})=>(
    <div>
        <h1>
            {name}
        </h1>
    </div>
)
const Content = ({parts})=>{
return(
    <>

    <h2>Course Parts</h2>
    <ul>
        {parts.map(part=><Part key={part.id} part = {part} />)}
    </ul>
    </>
)
}

const Part = ({part}) =>{
return (
    <>
    <li key = {part.id}>{part.name}: {part.exercises}</li>
    </>
)
}

const Totals = ({parts}) =>{
    return (
        <p>
        <strong>Total: </strong> {parts.reduce((a,b)=>{return {exercises:a.exercises + b.exercises}}).exercises}
        </p>

    )
}
export default Course