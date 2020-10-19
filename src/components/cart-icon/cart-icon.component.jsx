import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'
import './cart-icon.styles.scss'
import {connect} from 'react-redux'
import {toggleView} from '../../redux/cart/cart.actions'


const CartIcon = ({toggleView, count}) => (

    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleView} />
        <span className ='item-count' >{count}</span>
    </div>

)


const mapDispachToProps = dispatch => ({
    toggleView : () => dispatch (toggleView())
})

export default connect(null, mapDispachToProps)(CartIcon)