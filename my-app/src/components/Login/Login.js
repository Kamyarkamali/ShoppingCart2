import React ,{useState,useEffect} from 'react';

import { Link } from 'react-router-dom';

//Styled
import styled from "../Login/Login.module.css";


//Validate
import { Validate } from '../../SingUp/Validate';

import { notify } from '../Notify/notify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [data,setData]=useState({
        email:"",
        password:"",
    })
    const [errors,setErros]=useState({});
    const [toched,setToched]=useState({});

    useEffect(()=>{
        setErros(Validate(data,"Login"))
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
                email:true,
                password:true,
            })
        }
    }

    return (
        <section className={styled.cantainer}>
                <form className={styled.formcontainer} onSubmit={submitHandeler}>
                <header className={styled.header}>Login</header>
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
                    <div className={styled.formbottons}>
                        <Link to='/singup'>SingUp</Link>
                        <button type='submit'>Login</button>
                    </div>
                </form>
                <ToastContainer/>
        </section>
    );
};

export default Login;