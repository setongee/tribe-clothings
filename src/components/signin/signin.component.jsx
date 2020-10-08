import React, { Component } from 'react';
import './signin.styles.scss';

import FormInput from '../formInput/formInput.component' 
import CustomButton from '../customButton/customButton.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

class Signin extends Component {
    constructor() {
        super()

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = e => {

        e.preventDefault();

        this.setState ( { email : '', password : '' } )

    }

    handleChange = e => {

        const { value, name } = e.target;

        this.setState ( { [name] : value } );
    }


    render() {
        return (
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput 
                        type="email" 
                        name="email" 
                        required 
                        value={this.state.email} 
                        handleChange = {this.handleChange}
                        label = "Email"
                    />

                    <FormInput 
                        type="password" 
                        name="password" 
                        required 
                        value={this.state.password}
                        handleChange = {this.handleChange}
                        label = "Password"
                    />

                    <div className="button">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="submit" onClick = {signInWithGoogle} isGoogleBtn>Sign In With Google</CustomButton>
                    </div>
                    
                </form>

            </div>
        );
    }
}

export default Signin;