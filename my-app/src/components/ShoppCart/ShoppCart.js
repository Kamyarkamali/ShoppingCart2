import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//Style
import styled from "../ShoppCart/ShoppCart.module.css";

//react-notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../Notify/notify';
//Componet
import Cart from '../Cart/Cart';

///context
import { CartContext } from '../Context/CartContextProvider';

const ShoppCart = () => {
    const {state,dispatch}=useContext(CartContext)
    return (
        <div className={styled.container}>
            {state.selectedItems.map(item=> <Cart key={item.id} data={item}/>)}
            <div className={styled.border}></div>
            {
                state.itemscounter>0 && <div className={styled.items}>
                  <p>Total Items:</p>
                  <span>{state.itemscounter}</span>
                    <p>Total Payment:</p>
                    <span>{state.total}</span>
                    <div className={styled.btn}>
                        <button className={styled.checkout} onClick={()=>dispatch({type:"CHECKOUT"},notify("Successful payment","success"))}>CHECKOUT</button>
                        <button className={styled.cleare} onClick={()=>dispatch({type:"CLEARE"},notify("Purchase cleared","error"))}>CLEARE</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div className={styled.sucss}>
                    <h3>Checkout out Successfully</h3>
                <Link to='/products'>Whant To Buy?</Link>
                </div>
            }
            {
                !state.checkout && state.itemsCounter===0 &&<div className={styled.final}>
                <h3>Whant To Buy?</h3>
                <Link to='/products'>Go To Shopp</Link>
                </div>
            }
            <ToastContainer/>
        </div>
    );
};

export default ShoppCart;