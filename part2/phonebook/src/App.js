import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [ filter, setNewFilter ] = useState('')
  const [ filteredPersons, setFilteredPersons ] = useState('')

  const handleFilterChange = (e) => {
    setNewFilter(e.target.value)
    setFilteredPersons(persons.filter(person =>
      (person.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)))
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChange} value={filter} />
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <div>
        { filter === '' ? <Persons persons={persons} /> : <Persons persons={filteredPersons} /> }
      </div>
      
    </div>
  )
}

export default App
