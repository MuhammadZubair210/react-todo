import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import RaisedButton from 'material-ui/RaisedButton';




class App extends Component {

  constructor() {
    super()

    this.state = {
      todo: [],
      key: []
    }
    firebase.database().ref('/').child('todo').on('value', (snap) => {
      this.state.todo = [];
      this.state.key = []
      snap.forEach(sn => {
        this.state.todo.push(sn.val())
        this.state.key.push(sn.key)
        this.setState({ todo: this.state.todo, key: this.state.key })
      })
    })

  }

  remove(key) {
    firebase.database().ref('/').child(`todo/${this.state.key[key]}`).remove()
  }

  con() {
    firebase.database().ref('/').child('todo').push({ todo: this.refs.house.value })
  }

  render() {
    return (

      <div className="main">
        <br/>
        <h1>React Todo App</h1>

        <input type="text" ref="house" className="form-control" placeholder="Add todo" />
        <br />
        <button id="add" className="btn btn-primary" onClick={this.con.bind(this)}>ADD TODO</button>
        <br />
        <br />
        <ul className="list-group">{this.state.todo.map((val, index) => {
          return <li className="list-group-item" key={index}>{val.todo}
            <button className="btn btn-danger badge" onClick={this.remove.bind(this, index)}>remove</button>
          </li>
        })}</ul>
      </div>
    );
  }
}

export default App;