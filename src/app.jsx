import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class app extends Component{
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

    onSubmit(event){
        //Event.preventDefault()

        const registered = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            email : this.state.email,
            password : this.state.password
        }
        console.log(registered)
        axios.post('http://localhost:2000/app/signup', registered)
            .then(response=> console.log(response.data))

            this.setState({
                firstname : '',
                lastname : '',
                email : '',
                password : ''
            })
    }
    
    render(){
        
        return(
            <div>
               <div className='container'>
                   <div className='from-div'>
                       <form>
                           <input type = 'text'
                           placeholder = 'First Name'
                           onChange={this.changeFirstName}
                           value={this.state.firstname}
                           className='form-control form-group'/>

                           <input type = 'text'
                           placeholder = 'Last Name'
                           onChange={this.changeLastName}
                           value={this.state.lastname}
                           className='form-control form-group'/>

                           <input type = 'text'
                           placeholder = 'Email'
                           onChange={this.changeEmail}
                           value={this.state.email}
                           className='form-control form-group'/> 

                           <input type = 'text'
                           placeholder = 'Password'
                           onChange={this.changePassword}
                           value={this.state.password}
                           className='form-control form-group'/>    

                           <input type='button' className='btn submit' value ='submit' onClick={this.onSubmit}/>     
                       </form>
                   </div>
               </div>
            </div>
        );
    }
}

//export default app;