import React, { useState } from 'react'
import Validate from '../utils/Validate';
const useForm = () => {
    const [values, setValues] = useState({
        Username: "",
        Email: "",
        Password: "",
        CPassword: "",
    })

    const [errors,setErrors] = useState({})

    const handleChange = e =>{
        const {name,value}=e.target;

        setValues((prevValues)=>{
            return{
                ...prevValues,
                [name]:value,
            }
        })
    }
    const handleSubmit =e=>{
        e.preventDefault()
        setErrors(Validate(values))
    }
return{handleChange,values,handleSubmit,errors}

}

export default useForm
