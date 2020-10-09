import React from 'react';
import './sign-in-sign-up.styles.scss'
import SignUp from '../../components/signup/signup.component'

import SignIn from '../../components/signin/signin.component'

const SignInAndSignUp = () => {
    return (
        <div className='sign-page'>
            <SignIn/>
            <SignUp/>

        </div>
    );
}

export default SignInAndSignUp;
