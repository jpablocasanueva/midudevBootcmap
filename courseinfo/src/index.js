import React from 'react'
import ReactDOM from 'react-dom'
import header from './Header'
import content from './Content'
import total from './Total'

const App = () => {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  return (
    <div>
      <header course='Half Stack application development' />
      <content desc='Fundamentals of React' exce='10' />
      <content desc='Using props to pass data' exce='7' />
      <content desc='State of a component'exce='14' />
      <total desc='Number of exercises' num1='10' num2='7' num3='14'/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))