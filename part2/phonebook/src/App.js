import React, { useState,useEffect } from 'react'
import People from './Components/People'
import AddPerson from './Components/AddPerson'
import PeopleFilter from './Components/Filter'
import PeopleService from './Services/PeopleService'
import axios from 'axios'
import Error from './Components/ErrorNotification'
const App = () => {
  useEffect(()=>{
    PeopleService.GetAll()
    .then(people=>{
      setPersons(people)
    })
  },[])
  const [persons, setPersons] = useState([])
  const [error,setError] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [success,setSuccess] = useState(true)
  const [filter,setFilter] = useState('')
  const addNewPerson = (event) => {
    event.preventDefault()
    if (persons.some(x=>x.name===newName)){
      if (!window.confirm(`${newName} already exists. Update Phone#?`)) return
      PeopleService.Update(persons.find(x=>x.name === newName).id,{name: newName,number: newNumber})
      .then(x=>{
        setPersons(persons.map(person=> person.id !== x.id ? person : x ))
        setSuccess(true)
        setError(`${newName} successfully updated!`)
      })
      setTimeout(() => {
        setError('')
      }, 5000);
    }
    else{
      PeopleService.AddPerson({name:newName,number:newNumber}).then(x=>{
        setPersons(persons.concat(x))
        setSuccess(true)
        setError('Person Succesfully Added')
      })
      setTimeout(() => {
        setError('')
      }, 5000);
    }
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
  const PersonRemover = (person) =>{
    if (!window.confirm(`Remove ${person.name}?`)) {
      console.log("wut")
      return}
    PeopleService.Remove(person.id)
    .then(x=>{
      setPersons(persons.filter(x=>x.id !== person.id))
      setSuccess(true)
      setError(`${person.name} was removed!`)
    })
    .catch(()=>
    setError('Person Not Found on Server'))
    setSuccess(false)
    setTimeout(()=>{
      setError('')
    },5000)

  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Error message = {error} success = {success} />
      <h3>Add New Number</h3>
      <AddPerson newName = {newName} newNumber = {newNumber} numberChangedHandler = {numberChanged} nameChangedHandler = {nameChanged} submitHandler = {addNewPerson} />
      <h3>Existing Numbers</h3>
      <PeopleFilter filterText={filter} filterChanged = {filterChanged} />
      <People people={filteredPeople} PersonRemover = {PersonRemover} />
    </div>
  )
}

export default App