import React, { useState } from 'react'
import People from './Components/People'
import AddPerson from './Components/AddPerson'
import PeopleFilter from './Components/Filter'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filter,setFilter] = useState('')
  const addNewPerson = (event) => {
    event.preventDefault()
    if (persons.some(x=>x.name===newName)){
      window.alert(`${newName} already exists.`)
      return
    }
    setPersons(persons.concat({ name: newName,number: newNumber }))
    setNewName('')
    setNewNumber('')
  }
  const nameChanged = (event) => {
    setNewName(event.target.value)
  }
  const filteredPeople = persons.filter(x=>x.name.toLowerCase().includes(filter.toLowerCase()))
  const numberChanged = (event) =>{
    setNewNumber(event.target.value)
  }
  const filterChanged = (event) =>{

    setFilter(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add New Number</h3>
      <AddPerson newName = {newName} newNumber = {newNumber} numberChangedHandler = {numberChanged} nameChangedHandler = {nameChanged} submitHandler = {addNewPerson} />
      <h3>Existing Numbers</h3>
      <PeopleFilter filterText={filter} filterChanged = {filterChanged} />
      <People people={filteredPeople} />
    </div>
  )
}

export default App