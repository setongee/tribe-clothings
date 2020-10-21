import React from 'react';
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cartItem.component';
import CustomButton from '../customButton/customButton.component'
import {selectCartItems} from '../../redux/cart/cart.selectors';

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

const mapStateToProps = state => ({
    cartItem : selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
