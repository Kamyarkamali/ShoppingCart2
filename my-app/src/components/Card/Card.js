import React,{useContext} from 'react';


//Context
import {CartContext} from "../Context/CartContextProvider";

//Helpers
import { isInCart ,quantityCount} from '../helpers/function';

//Icons
import trash from "../icon/trash.gif";
import up from '../icon/up.gif';
import down from '../icon/down.gif';

//Style
import style from "../Card/Card.module.css";
const Card = ({prodcut}) => {
    const {state,dispatch}=useContext(CartContext)
    const {image,price,name}=prodcut;
    return (
        <div className={style.container}>
            <img src={image} alt='shopp' className={style.shopimage}/>
            <h3>{name}</h3>
            <p>{price} $</p>
            <div className={style.arrow}>
                {/* <img src={up} alt='up'/>
                <span></span>
                <img src={down} alt='down'/> */}
                {
                    isInCart(state,prodcut.id)?
                    <button className={style.btnsmall} onClick={()=>dispatch({type:"INCRISE",payload:prodcut})}><img className={style.small} src={up} alt='up'/></button>:
                    <button className={style.btn} onClick={()=>dispatch({type:"ADD_ITEM",payload:prodcut})}>ADD TO CART</button>
                }
                <div className={style.btncontainer}>
                    {quantityCount(state,prodcut.id)>0 && <span>{quantityCount(state,prodcut.id)}</span>}
                    {quantityCount(state,prodcut.id)>1&& <button className={style.btnsmall} onClick={()=>dispatch({type:"DECRISE",payload:prodcut})}><img className={style.small}  src={down} alt='down'/></button>}
                    {quantityCount(state,prodcut.id)===1&& <button className={style.btnsmall} onClick={()=>dispatch({type:"REMOVE_ITEM",payload:prodcut})}><img className={style.small}  src={trash} alt='trash'/></button>}
                    </div>
            </div>
        </div>
    );
};

export default Card;