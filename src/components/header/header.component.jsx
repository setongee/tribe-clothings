import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assests/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {auth} from '../../firebase/firebase.utils'
import './header.styles.scss'


const Header = ({ currentUser, view }) => (

    <div className='header'>
      
      <Link className='logo-box' to='/'>
        <Logo className='logo' />
      </Link>
      
      <div className='options'>
        
        <Link className='option' to='/shop'>
          SHOP
        </Link>
       
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}

        <CartIcon/>

      </div>
        
       {
         view ? null :  <CartDropdown/>
       }

    </div>
  );
  
  const mapStateToProps = ( { user : {currentUser}, cart : {view} } ) => ({
    currentUser,
    view
  });
  
  export default connect(mapStateToProps)(Header);