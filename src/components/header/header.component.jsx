import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import {auth} from '../../firebase/firebase.utils'

import './header.styles.scss'


const Header = ({ currentUser }) => {

    const signOut = () => auth.signOut();

    return (
        <div className='header'>
            <Link className='logo-box' to='/'>
                <Logo className = 'logo' />
            </Link>

            <div className="options">
                <Link to = '/shop' className='option'>
                    SHOP
                </Link>

                <Link to = '/contact' className='option'>
                    CONTACT
                </Link>

                {
                    currentUser ? 
                    <div className = 'option' onClick = { signOut } > SIGN OUT </div> 
                    : 
                    <Link to = '/signin' className = 'option'> SIGN IN </Link>
                }

            </div>

        </div>
    );
}

export default Header;
