import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
// import FormControl from '@material-ui/core/FormControl';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';
import Message from './Message'

function App() {
const [input, setInput] = useState('') 
const [messages, setMessages] = useState([{username: 'sonny', text: 'hey guys'}, {username: 'money', text: 'get da bag'},])
const [username, setUsername] = useState('')
   useEffect(() => {
    //  const username = prompt('Please enter your name')
    setUsername(prompt('Please enter your name'))

   }, [])

  return (
    <div className="App">
      <h1>hello</h1>
      <h2>Hello {username}</h2>
    
      <form>
       <FormControl>
     <InputLabel>Enter a message...</InputLabel>
  <Input onChange={event => setInput(event.target.value)}
       value={input}/>
  <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>

</FormControl> 
          
      </form>
    

    {
      messages.map(message => (
        <Message username={username} message={message} />
      ))
    }

    </div>  
  );
}

export default App;
