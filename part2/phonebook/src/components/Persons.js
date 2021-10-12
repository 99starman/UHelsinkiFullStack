import React from 'react'

const Persons = ({persons}) => {
    return (
        <ul>
        {persons.map((e, i) => <li key={i}>{e.name} {e.number} </li>)}
        </ul>

    )
}

export default Persons