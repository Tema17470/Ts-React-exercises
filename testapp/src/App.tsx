import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

let result: number;

function sum (p1: number, p2: number){
  console.log("Function sum:")
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

function handleClick1() {
  result = sum(5, 9);
  console.log(result);
}

function product (p1: number, p2: number){
  console.log("Function product:")
  console.log(p1)
  console.log(p2)
  return p1 * p2
}

function handleClick2() {
  result = product(5, 9);
  console.log(result);
}

function substraction (p1: number, p2: number){
  console.log("Function substraction:")
  console.log(p1)
  console.log(p2)
  return p1 - p2
}

function handleClick3() {
  result = substraction(5, 9);
  console.log(result);
}

type user = {
  name: string;
  age: number;

}

const Hello = (props: user) => { // can be done like this: const Hello = ({ name, age }) => {...
  const {name, age} = props // same as (const age = props.age)
  const bornYear = () => new Date().getFullYear() - age
  return(
  <div>
            <p>
              Hello {name}, you are {age} years old
            </p>
            <p>So you were probably born in {bornYear()}</p>
          </div>
  )
}


function App() {
  console.log('Hello')
  const object1 = {
    name: 'Arto Hellas',
    age: 35,
    //education: 'PhD',
  }
/*
  const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
  }

  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }
  console.log("Objects:")
  console.log(object2.level)         // Arto Hellas is printed
  const fieldName = 'age' 
  const teacher = 'name'
  console.log(object3[teacher])
  console.log(object1[fieldName])    // 35 is printed
*/
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
        </div>
        <ul>
        <button
          type="button"
          className="Executor"
          onClick={handleClick1}
        >
          Click to execute function 1
        </button>
        <button 
          type="button"
          className="Executor"
          onClick={handleClick2}
        >
          Click to execute function 2
          </button>
          <button 
          type="button"
          className="Executor"
          onClick={handleClick3}
        >
          Click to execute function 3
          </button>
          </ul>  
      <div>
      <ul>
      <h1> Salutations </h1>
      <Hello name = {object1.name} age = {object1.age}/>

      </ul>
      </div>
      </section>
      

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
