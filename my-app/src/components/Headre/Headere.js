import React,{useContext} from 'react';
import { Link } from 'react-router-dom';



///Style
import styled from "../Headre/Headere.module.css";

//Icon
import shopping from '../icon/Icon.png'; 

//Context
import { CartContext } from '../Context/CartContextProvider';

const Headere = () => {
    const{state}=useContext(CartContext)
    return (
        <>
        <header className={styled.header}>
            <div className={styled.listcontainer}>
                <ul>
                    <li><Link to='/products'>Shopping</Link></li>

                </ul>
            </div>
            <div className={styled.logo}>
            <Link className={styled.singup} to='/singup'>SingUp</Link>
            <Link to='/shopcarts'><img src={shopping} alt='shopp'/></Link>
            <span className={styled.price}>{state.itemscounter}</span>
            </div>
        </header>
        </>
    );
};

export default Headere;