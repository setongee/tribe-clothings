import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItem
)

export const selectCartCount = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce((total, item) => total + item.quantity, 0)
)