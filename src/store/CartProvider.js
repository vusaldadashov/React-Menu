import React,{useReducer} from "react";
import CartContext from "./cart-context";

const defaultState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (action,state) => {
    if(action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {items: updatedItems, totalAmount: updatedTotalAmount}
    }
    return defaultState
}

const CartProvider = (props) => {
    const [cartState, dispatchState] = useReducer(cartReducer, defaultState)
    const addItemHandler = item => {
        dispatchState({
            type: 'ADD',
            item: item
        })
    }
    const removeItemHandler = id => {
        dispatchState({
            type: 'REMOVE',
            id: id
        })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler ,
        removeItem: removeItemHandler
    }

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider