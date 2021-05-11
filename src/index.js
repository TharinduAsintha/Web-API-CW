import React from 'react'
import Reactdom from 'react-dom';
import App from './app'
import Routes from '../src/routes'
import Login from './views/Login/Login'
import Signup from './views/Signup/Signup'



Reactdom.render(<Routes/>, document.getElementById('root'))
