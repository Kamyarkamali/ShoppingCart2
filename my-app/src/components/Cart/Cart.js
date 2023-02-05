import React,{useContext} from 'react';

//Styled
import styled from "../Cart/Cart.module.css";

//Icons
import trash from "../icon/trash.gif";

// Context
import { CartContext } from '../Context/CartContextProvider';

const Cart = (props) => {
    const {image,name,price,quantity}=props.data
    const {dispatch}=useContext(CartContext)
    return (
        <div className={styled.container}>
            <img style={{width:"200px"}} src={image} alt='card'/>
            <div className={styled.text}>
                <h3>{name}</h3>
                <p>{price} $</p>
            </div>
            <div className={styled.span}>
                <span>{quantity}</span>
            </div>
            <div className={styled.btn}>
                {
                    quantity >0 ?
                    <button className={styled.btnsmall} onClick={()=>dispatch({type:"DECRISE",payload:props.data})}>-</button>:
                    <button className={styled.btnsmall} onClick={()=>dispatch({type:"REMOVE_ITEM",payload:props.data})}><img src={trash} alt='trash'/></button>
                }
                <button className={styled.btnsmall} onClick={()=>dispatch({type:"INCRISE",payload:props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;