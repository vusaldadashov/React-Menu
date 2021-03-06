import React,{useContext} from "react"
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon"
import CartContext from "../../store/cart-context"
const HeaderCartButton = props => {
    const itemsCtx = useContext(CartContext)
    const numberOfCartItems = itemsCtx.items.reduce((current, item) => {
        return current + item.amount
    }, 0)
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}


export default HeaderCartButton