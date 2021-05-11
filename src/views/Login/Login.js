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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GoogleLogin from 'react-google-login';
import Loginview from './LoginView'
import ReactCom, { Component } from 'react';


class Login extends Component{

   handleLogin = async googleData => {
    const res = await fetch("/api/v1/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(res,"wwwww")
    const data = await res.json()
  }

  // googleSign(){
  //   const { OAuth2Client } = require('google-auth-library')
  // const client = new OAuth2Client(process.env.CLIENT_ID)
  // server.post("/api/v1/auth/google", async (req, res) => {
  //     const { token }  = req.body
  //     const ticket = await client.verifyIdToken({
  //         idToken: token,
  //         audience: process.env.CLIENT_ID
  //     });
  //     const { name, email, picture } = ticket.getPayload();    
  //     const user = await db.user.upsert({ 
  //         where: { email: email },
  //         update: { name, picture },
  //         create: { name, email, picture }
  //     })
  //     res.status(201)
  //     res.json(user)
  // })
  // }

  
render(){
  return(
    <Loginview>
      handleLogin = {this.handleLogin}
    </Loginview>
    );
}
}

export default Login;