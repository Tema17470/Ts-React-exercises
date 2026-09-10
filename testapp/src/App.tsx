import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import './components/functions1.tsx'
import Note from './components/Notes.tsx'

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

//hierarcycal type of handleclick
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}// or like this: const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}
/* Not used now
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
*/
function App(props) {

  const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState(
    'a new note...'
  ) 
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  
  //left and right states
    const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const handleLeftClick = () =>
    setClicks({ ...clicks, left: clicks.left + 1 })

  const handleRightClick = () =>
    setClicks({ ...clicks, right: clicks.right + 1 })

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
  }

  setNotes(notes.concat(noteObject))
  setNewNote('')
}
    const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
/*
  const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  }
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
          <h1>Salutations</h1>
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
      <Display counter={counter}/>
      <ul>
      <Button 
      onClick={increaseByOne}
      text="+"
      />
      <Button 
      onClick={decreaseByOne}
      text="-"
      />
      <Button 
      onClick={setToZero}
      text="reset"
      />
      </ul>
      <div>
      {clicks.left} """
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      """ {clicks.right}
      </div>
      </div>
      <div>
        <p>Notes</p>
        <ul>
          {notes.map(note => 
          <Note key={note.id} note={note}/>
          )}
        </ul>
        <form onSubmit={addNote}>
          <input
          value={newNote}
          onChange={handleNoteChange} 
          />
          <button type="submit">save</button>
        </form>
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
