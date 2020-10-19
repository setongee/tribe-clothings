import React from 'react';
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cartItem.component';

import CustomButton from '../customButton/customButton.component'

const CartDropdown = ({cartItem}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItem.map(cartItem => (
                    <CartItem key = {cartItem.id} item = {cartItem} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart : {cartItem} } ) => ({
    cartItem
})

export default connect(mapStateToProps)(CartDropdown);
