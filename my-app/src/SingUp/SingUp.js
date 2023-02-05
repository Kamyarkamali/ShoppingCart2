import React,{useState,useEffect} from 'react';

import { Link } from 'react-router-dom';
//Styled
import styled from "../SingUp/SingUp.module.css";

//Validate
import { Validate } from './Validate';

import { notify } from '../components/Notify/notify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingUp = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:"",
        isAccepted:false
    })
    const [errors,setErros]=useState({});
    const [toched,setToched]=useState({});

    useEffect(()=>{
        setErros(Validate(data,"SingUp"))
    },[data])

    const changeHandeler=(event)=>{
        if(event.target.name==="isAccept"){
            setData({...data,[event.target.name]:event.target.checked})
        } else{
            setData({...data,[event.target.name]:event.target.value})
        }
    }

    const focoshHandeler=(event)=>{
        setToched({...data,[event.target.name]:true})
    }

    const submitHandeler=(event)=>{
        event.preventDefault()
        if(!Object.keys(errors).length){
            notify("You SingIn successfully","success")
        } else{
            notify("Invalid data!",'error')
            setToched({
                name:true,
                email:true,
                password:true,
                confirmpassword:true,
                isAccepted:true
            })
        }
    }

    return (
        <section className={styled.cantainer}>
                <form className={styled.formcontainer} onSubmit={submitHandeler}>
                <header className={styled.header}>SingUp</header>
                    <div className={styled.formfild}>
                    <label>Name:</label>
                    <input className={(errors.name && toched.name) ? styled.uncompailed :styled.formfild } type='text' placeholder='Name:' name='name' value={data.name} onChange={changeHandeler} onFocus={focoshHandeler}/>
                    {errors.name &&toched.name &&<span>{errors.name}</span>}
                    </div>
                    <div className={styled.formfild}>
                    <label>Email:</label>
                    <input type='email' placeholder='email:' name='email' value={data.email} onChange={changeHandeler} onFocus={focoshHandeler}/>
                    {errors.email &&toched.email &&<span>{errors.email}</span>}
                    </div>
                    <div className={styled.formfild}>
                    <label>password:</label>
                    <input type='password' placeholder='Password:' name='password' value={data.password} onChange={changeHandeler} onFocus={focoshHandeler}/>
                    {errors.password &&toched.password &&<span>{errors.password}</span>}
                    </div>
                    <div className={styled.formfild}>
                    <label>ConfirmPassword:</label>
                    <input type='password' placeholder='Confirmpassword:' name='confirmpassword' value={data.confirmpassword} onChange={changeHandeler} onFocus={focoshHandeler}/>
                    {errors.confirmpassword &&toched.confirmpassword &&<span>{errors.confirmpassword}</span>}
                    </div>
                    <div className={styled.formfild}>
                    <label>Im accepted terms privacy policy</label>
                    <input className={styled.checkbox} type='checkbox'  name='isAccepted' value={data.isAccepted} onChange={changeHandeler} onFocus={focoshHandeler}/>
                    {errors.isAccepted &&toched.isAccepted &&<span>{errors.isAccepted}</span>}
                    </div>
                    <div className={styled.formbottons}>
                        <Link to='/login'>Login</Link>
                        <button type='submit'>SingUp</button>
                    </div>
                </form>
                <ToastContainer/>
        </section>
    );
};

export default SingUp;