import React, { useState } from 'react'

const PersonForm = ({ persons, setPersons }) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const addPerson = (event) => {        
        event.preventDefault()

        const personsArray = persons.map(e => e.name)
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }
        if (personsArray.includes(`${newName}`)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(personObject))
        }        
        setNewName('')
        setNewNumber('')
    }
    
    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }

    const handleNumberChange = (e) => {
        setNewNumber(e.target.value)
    }

    return (
        <form onSubmit={addPerson}>
        <div>
        name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
        number: <input value={newNumber} onChange={handleNumberChange} />         
        </div>
        <div>
        <button type="submit">add</button>
        </div>
    </form>

    )
}

export default PersonForm