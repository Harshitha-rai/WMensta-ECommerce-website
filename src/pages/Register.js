import React, { useEffect, useState } from 'react'
import '../asset/login.css';
import RegisterImage from '../images/registerImage.jpg';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Register = () => {
    const initialValues = {
        email: "",
        password: "",
        confirmPassword:""
    }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    function handleChange(e) {
        const {name, value} = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        
        const errors = {};
        const regexE = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const regexP =  /^(?=[A-Za-z0-9]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/g;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regexE.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (!regexP.test(values.password)) {
            errors.password = "8 characters atleast 1 lowercase 1 uppercase 1 number";
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "Confirm password is required!";
        }else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Password doesn't match!"
        }
        return errors;
    }

    return (
        <>
        <Header />
        <div className='login-container'>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="success-message">Signed up successfully</div>)
            : ""}
            <div className='login-container-detail'>
                <div className='login-img'>
                    <img src={RegisterImage} alt='login'/>
                </div>
                <div className='login-detail'>
                    <h2>WMensta</h2>
                    <form className='login-form'>
                        <div className='field'>
                            <label>Email</label>
                            <input type='email' name='email' onChange={handleChange} placeholder='Email' value={formValues.email}/>
                            <p>{formErrors.email}</p>
                        </div>
                        <div className='field'>
                            <label>Password</label>
                            <input type='password' name='password' onChange={handleChange} placeholder='Password' value={formValues.password}/>
                            <p>{formErrors.password}</p>
                        </div>
                        <div className='field'>
                            <label>Confirm Password</label>
                            <input type='password' name='confirmPassword' onChange={handleChange} placeholder='Confirm password' value={formValues.confirmPassword}/>
                            <p>{formErrors.confirmPassword}</p>
                        </div>
                        <button onClick={handleSubmit}>Sign up</button>
                    </form>
                    <p className='forgot-pass'>Forgot password?</p>
                    <p className='signup-text'>Have an account? <Link to='/login' style={{textDecoration:'none'}}><span>Sign in</span></Link></p>
                </div>
            </div>
        </div>
    </>
    )
    }

export default Register