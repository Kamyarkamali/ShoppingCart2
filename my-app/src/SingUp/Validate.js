export const Validate=(data,type)=>{
    const errors={};

   

    if(!data.email){
        errors.email="Email Required"
    } else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(data.email)){
        errors.email="Email Addres invalide"
    } else{
        delete errors.email
    }

    if(!data.password){
        errors.password="Password Required"
    } else if(data.password.length<6){
        errors.password="Password need to be caracters 6"
    } else{
        delete errors.password
    }

    if(type==="SingUp"){
        if(!data.name.trim()){
            errors.name="UserName Required"
        } else{
            delete errors.name
        }

        
    if(!data.confirmpassword){
        errors.confirmpassword="confirm the password"
    } else if(data.confirmpassword!==data.password){
        errors.confirmpassword="password do not match"
    } else{
        delete errors.confirmpassword
    }

    if(data.isAccepted){
        delete errors.isAccepted
    } else{
        errors.isAccepted="accepted our Regulations"
    }

    }

    return errors;
}