import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {



  render() {
    return (
      <div>
        <img src={logo} width="100" height="100" alt="app-logo" className="logo" />
        <h1 className="app-title">ToDo App</h1>
       
        <div className="container">
          Add an Item....
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a Todo"
            required/>

          <button
            className="add-btn">
            Add Todo
          </button>
          
          <div className="list">
            <ul>
              <li>
                <input type="checkbox" name="" id="" />
                Record youtube videos
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>

        </div>
      
      </div>
    );
  }

}

export default App;
