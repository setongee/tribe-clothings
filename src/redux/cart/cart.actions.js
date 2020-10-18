import {cartTypes} from './cart.type'

export const toggleView = () => ({
    type : cartTypes.TOGGLE_CART_VIEW
})

export const addItem = item => ({
    type : cartTypes.ADD_TO_CART,
    payload : item
})