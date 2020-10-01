import React from 'react'

const Person = ({person,PersonRemover}) =>{
    return(
    <tr key={person.name}><td>{person.name}</td><td>{`   #`}{person.number}</td><td><button onClick={()=>PersonRemover(person)}>Delete</button></td></tr>
    )
}
const People = ({people,PersonRemover}) => {
    return(
        <table>
            <thead>
                <tr>
                    <td><strong>Name</strong></td>
                    <td><strong>Number</strong></td>
                </tr>
            </thead>
            <tbody>
            {people.map(person => <Person key={person.name} person= {person} PersonRemover = {PersonRemover} />)}
            </tbody>
        </table>
    )
}
export default People;