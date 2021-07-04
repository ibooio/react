import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Hello =  ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Header = (props) => {
  console.log(props)
  return <h1>{props.course.name}</h1>
}

const Content = (props) => {
  console.log(props)
  return <div><div>{props.parts[0].name}</div><div>{props.parts[1].name}</div><div>{props.parts[2].name}</div></div>;
}

const Total = (props) => {
  console.log(props)
  return <div>{props.parts.length}</div>
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const name="Pedro";
  const age = 35;

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={increaseByOne} text="plus"/>
      <Button handleClick={decreaseByOne} text="minus"/>
      <Button handleClick={setToZero} text="zero"/>
      <Hello name={name} age={age}/>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

/*
const App = () => {



  return (
    <div>
      <Header course="course"/>
      <Header course={course}/>
      <Hello name={name} age={age} />
    </div>
  )
}


*/

