import React, { Component } from 'react';
import './App.css';
import './components/Presenations';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Presentaions from './components/Presenations';
import Home from './components/Home';
import axios from 'axios';
import Header from './components/Header.js';

class App extends Component {
  state = {
    presentations:[]
  };

  componentDidMount () {  
      axios.get('/presentations').then((response) => {
          this.setState({
              presentations:response.data
          }) // error handling ? 
      })
  }

  addPresentation = (presentation) => {
    axios.post('/presentations', presentation)
    .then((response) => {
      this.setState({presentations:[...this.state.presentations,response.data]});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  deletePresentation = (id,index)=>{
    axios.delete(`/presentations/${id}`)
    .then((response) => {
      let copyOfpresentations = this.state.presentations;
      copyOfpresentations.splice(index,1);
      this.setState({presentations:copyOfpresentations});
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  render() {
    return (
      <Router> 
        <div className="main-wrapper">
        <Header />
        <Route exact path='/' component={Home} />
        <Route  path='/presentations' render={(props)=><Presentaions {...props} presentations={this.state.presentations} addPresentation={this.addPresentation} deletePresentation={this.deletePresentation}/>}/>
        </div>        
      </Router> 
    )
  }
}

export default App;