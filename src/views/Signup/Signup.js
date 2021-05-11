import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ReactCom, { Component } from 'react';
import axios from 'axios'
import { render } from 'react-dom';
import Route from '../../routes/index'
import View from './view'

class Signup extends Component{
  
  constructor(){
    super()
    this.state = {
        firstname : '',
        lastname : '',
        email : '',
        password : ''
    }
    this.changeFirstName = this.changeFirstName.bind(this)
    this.changeLastName = this.changeLastName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    
}

changeFirstName(event){
  this.setState({
      firstname:event.target.value
  })
}
changeLastName(event){
  this.setState({
      lastname:event.target.value
  })
}
changeEmail(event){
  this.setState({
      email:event.target.value
  })
}
changePassword(event){
  this.setState({
      password:event.target.value
  })
}

onSubmit(){

  

  const registered = {
      firstname : this.state.firstname,
      lastname : this.state.lastname,
      email : this.state.email,
      password : this.state.password
  }
  console.log(registered,"wdad")
  axios.post('http://localhost:2000/api/signup', registered)
      .then(response=> console.log(response.data))

      // this.setState({
      //     firstname : '',
      //     lastname : '',
      //     email : '',
      //     password : ''
      // })
}

render(){
  return(
    <View 
    changeFirstName = {this.changeFirstName}
    changeLastName = {this.changeLastName}
    changeEmail = {this.changeEmail}
    changePassword = {this.changePassword}
    onSubmit = {this.onSubmit}

    state = {this.state}
    />

    );
}


}
export default Signup;