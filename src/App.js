import React, { Component } from 'react'
import Header from './Header.js';
import ImageList from './ImageList.js';
import DropDown from './DropDown.js';
import animals from './data.js';

export default class App extends Component {
  state = {
    filter: "",
    horns: ""
}

handleChange = e => {
    console.log(e.target.value);
    this.setState({
        filter: e.target.value
    });
}

handleHornsChange = e => {
    console.log(e.target.value);
    this.setState({
        horns: e.target.value
    });
}
  
  render() {
    return (
      <>
      <Header />
      <DropDown handleChange={this.handleChange} handleHornsChange={this.handleHornsChange}/>
      <ImageList animals= {animals}
      filter={this.state.filter} 
      horns={this.state.horns}/>
      </>
    )
  }
}