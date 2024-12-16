import React from 'react'
import useForm from '../hooks/useForm'
import "./FormValidation.css"
const FormValidation = () => {
    const {handleChange,values,handleSubmit,errors}=useForm();
    return (
        <div className='Form-container'>
            <form action="" className="form" onSubmit={handleSubmit}>
                <h1>Get Started Guys</h1>
                <div className="form-inputs">
                    <label className='form-label' htmlFor='Email'>Username</label>
                    <input
                        type="text"
                        name='Username'
                        className='form-input'
                        placeholder='Username'
                        id='Username'

                        onChange={handleChange}
                        value={values.Username} />
                        {errors.Username && <p className='errors'>{errors.Username}</p>}
                </div>
                <div className="form-inputs">
                    <label className='form-label' htmlFor='Email'>Email</label>
                    <input
                        type="text"
                        name='Email'
                        className='form-input'
                        placeholder='Email'
                        id='Email'
                        onChange={handleChange}
                        value={values.Email} />
                        {errors.Email && <p className='errors'>{errors.Email}</p>}
                </div>
                <div className="form-inputs">
                    <label className='form-label' htmlFor='Password'>Password</label>
                    <input
                        type="text"
                        name='Password'
                        className='form-input'
                        placeholder='Password'
                        id='Password'

                        onChange={handleChange}
                        value={values.Password} />
                        {errors.Password && <p className='errors'>{errors.Password}</p>}
                </div>
                <div className="form-inputs">
                    <label className='form-label' htmlFor='CPassword'>Confirm Password</label>
                    <input
                        type="text"
                        name='CPassword'
                        className='form-input'
                        placeholder='Confirm Password'
                        id='CPassword'
                        onChange={handleChange}
                        value={values.CPassword}
                    />
                    {errors.CPassword && <p className='errors'>{errors.CPassword}</p>}
                </div>
                <button className="form-button" type='submit'>Sign-up</button>
                <span className="login">Already have an account ? Login <a href="www.google.com">here</a></span>
            </form>
        </div>
    )
}

export default FormValidation
