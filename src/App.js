import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');
  var usernames = ['hanswurst', 'maxmuster', 'reinerzufall', 'peternull']
  var messageBackend = '';
  function validate() {
    messageBackend = '';
    if (name === '' || username === '' || course === '') {
      messageBackend = 'Please fill out all fields; ';
    }
    if (usernames.includes(username)) {
      messageBackend = messageBackend + 'Username already used; ';
    }
    if (messageBackend === '') {
      messageBackend = 'Success';
      window.location.reload();
    }
    setMessage(messageBackend);
  }
  return (
    <div className="App">
      <div className="container-fluid">
        <form className="form-inline">
          <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
          <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" onChange={event => setName(event.target.value)}/>
          <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>
            <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" onChange={event => setUsername(event.target.value)}/>
          </div>
        </form>

        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="react" onChange={event => setCourse(event.target.value)}/>
          <label className="form-check-label" htmlFor="inlineRadio1">React Kurs</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="js" onChange={event => setCourse(event.target.value)}/>
          <label className="form-check-label" htmlFor="inlineRadio2">JavaScript Kurs</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="angular" disabled onChange={event => setCourse(event.target.value)}/>
          <label className="form-check-label" htmlFor="inlineRadio3">Angular Kurs</label>
        </div>
        <div className="p-2">
          <button type="submit" onClick={() => validate()} className="btn btn-primary mb-2">Submit</button>
        </div>
        <p>{message}</p>
        <div>
          <p>{name}</p>
          <p>{username}</p>
          <p>{course}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
