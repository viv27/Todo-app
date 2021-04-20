
import './App.css';
import React from 'react'
import {useState,useEffect} from 'react'
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'


function App() {
const [todos, setTodos] = useState([])
const [input, setInput]= useState('')

useEffect(()=>{
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    console.log(snapshot.docs.map(doc=> doc.data()))
    setTodos(snapshot.docs.map(doc=> doc.data().todo))

  })
},[hi])



const addTodo =(event)=>{
    event.preventDefault()

    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    
})
setInput('')
}

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form >
      <input value={input} onChange={event=>setInput(event.target.value)}/>
      
      <button disabled={!input} type="submit" onClick={addTodo}>Add Todo</button> 
      {/* <Button type="submit" onClick={addTodo}>Add</Button> */}
      


      </form>
      

      <ul>
        {todos.map(todo =>(
          <Todo text ={todo}/>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
