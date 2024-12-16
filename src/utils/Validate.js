export default function Validate(values){
    let errors ={};
    if(!values.Username.trim()){
        errors.Username='Username Required'
    }
    if(!values.Email.trim()){
        errors.Email="Email Required"
    }
    if(!values.Password.trim()){
        errors.Password="Password Required"
    }
    else if(values.Password < 6){
        errors.Password="Password must me greater then 6"
    }
    if(!values.CPassword.trim()){
         errors.CPassword=" Confirm Password Required"
    }
    else if(values.CPassword!==Password){
        errors.CPassword="password not matched"
        
    }

    return errors
}