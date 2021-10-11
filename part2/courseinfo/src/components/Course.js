import React from 'react'

const Header = ({ course }) => {
    return (    
      <div>
        <h1>{course.name}</h1>
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <div>
        <p>{props.part.name} {props.part.exercises}</p>
      </div>
    )
  
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => <Part key={part.id} part={part} />)}
      </div>
  
    )
  }
  
  const Total = ({ course }) => {
    const adder = course.parts.reduce((total, curr) => (total + curr.exercises), 0)
  
    return (
      <div>
        <p><b>Total of {adder} exercises</b></p>
      </div>
    )
  }
  
  
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
      </div>
    )
  }

  export default Course