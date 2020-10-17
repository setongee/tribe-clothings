import {cartTypes} from './cart.type'

const INITIAL_STATE = {
    view : true
};

const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case cartTypes.TOGGLE_CART_VIEW : 
        return {
            ...state,
            view : !state.view
        }

        default :
        return state
    }

}

export default cartReducer;