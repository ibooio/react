import React from 'react'
import ReactDOM from 'react-dom'

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
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))





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

