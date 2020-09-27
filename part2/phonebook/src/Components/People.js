import React from 'react'

const Person = ({person}) =>{
    return(
    <tr key={person.name}><td>{person.name}</td><td>{`   #`}{person.number}</td></tr>
    )
}

const People = ({people}) => {
    return(
        <table>
            <thead>
                <tr>
                    <td><strong>Name</strong></td>
                    <td><strong>Number</strong></td>
                </tr>
            </thead>
            <tbody>
            {people.map(person => <Person key={person.name} person= {person} />)}
            </tbody>

        </table>
    )
}

export default People;