import React,{useState,useEffect} from 'react';

//Data
import {data} from "../Data/Data";


//Componets
import Card from '../Card/Card';

///Style
import styled from "../Cards/Cards.module.css"

const Cards = () => {
    const [prodcut,setProdoct]=useState([]);

    useEffect(()=>{
        setProdoct(data)
    },[])

    return (
        <div className={styled.container}>
            {prodcut.map(item=> <Card key={item.id} prodcut={item}/>)}
        </div>
    );
};

export default Cards;