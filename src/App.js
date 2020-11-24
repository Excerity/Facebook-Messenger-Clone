import React, {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import FormControl from '@material-ui/core/FormControl';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';
import Message from './Message'
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'

function App() {
const [input, setInput] = useState('') 
const [messages, setMessages] = useState([{username: 'sonny', message: 'hey guys'}, {username: 'money', message: 'get da bag'},])
const [username, setUsername] = useState('')

  useEffect(() => {
   db.collection('messages')
   .orderBy('timestamp', 'desc')
   .onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
   })
  }, [])

   useEffect(() => {
    //  const username = prompt('Please enter your name')
    setUsername(prompt('Please enter your name'))

   }, [])

  const sendMessage = event => {
    event.preventDefault()

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })    
    setInput('')
  }
                           
  return (
    <div className="App">
      <img src="https://img.icons8.com/fluent/48/000000/facebook-messenger--v2.png"/>
      <h1>hello</h1>
      <h2>Hello {username}</h2>                                 

      <form className='app__form'>
       <FormControl>
     <InputLabel>Enter a message...</InputLabel>
  <Input onChange={event => setInput(event.target.value)}
       value={input}/>
  <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>

</FormControl> 
          
      </form>
    
    <FlipMove>
    {
      messages.map(({id, message}) => (
        <Message key={id} username={username} message={message} />
      ))
    }

    </FlipMove>

   
    </div>  
  );
}

export default App;
