import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './Error';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import styles from './Error.module.css';



const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('votre email est invalide')
        .required('Champ requis'),
    password: Yup.string().required('Champ requis')
        .min(6, 'Password must be at least 6 characters')
})



function LoginForm() {

    useEffect(() => {
        const apiUrl = `http://localhost:3000/api/signup`;
        const values = {
            "name": "Issa",
            "email": "user@domain.tld",
            "password": "123456789"
        };
        async function createUser() {

            await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
        }
        createUser();
    }, []);



    const [errorLogin, seterrorLogin] = useState(false);

    return <>
        <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);

            const apiUrl = `http://localhost:3000/api/login`;
            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const authStatus = await res.json();
            console.log(authStatus);
            if (authStatus.valid) {
                Router.push('/dashboard')
            }

            else {
                seterrorLogin(true);
            }

        }}>
            {({ touched, values, errors, handleBlur, handleChange, handleSubmit }) => (
                <div className='login-wrapper'>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <img src='../img/icons/logo.svg' className='logo-svg' alt='logo' />
                        <div className="form-field">
                            <input
                                type="email"
                                id='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={values.email}
                                name="email" className={'input-text js-input ' + (values.email && errors.email ? 'input-invalid' : 'input-valid')}
                            />
                            <label htmlFor="email" className="label">Adresse email</label>
                            <Error touched={touched.email} message={errors.email}></Error>
                        </div>
                        <div className='form-field'>
                            <input
                                type="password"
                                id='password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={values.password}
                                name="password" className={'input-text js-input ' + (touched.password && errors.password ? 'has errors ' : null)}
                            />
                            <label htmlFor="password" className="label">Mot de passe</label>
                            <Error touched={touched.password} message={errors.password}></Error>
                        </div>
                        <div>
                            <button type="submit" className={'btn btn-login ' + ((touched.email && !errors.email) && !errors.password ? 'btn-validate' : 'disabled')} >connexion</button>
                        </div>

                        {errorLogin ? <div className={"text-center " + styles.invalid} >votre mot de passe ou votre email est invalide</div> : null}
                    </form>
                </div>

            )}
        </Formik>
        <style jsx >{`
       .login-wrapper {
        background-color: rgb(255, 255, 255);
        max-width: 480px;
        width: 96%;
        padding: 40px;
        border-radius: 8px;
        margin: 3% auto;
    }
    
    .form-field {
    
        position: relative;
        margin-bottom: 60px;
        text-align: left;
    }
    
    .input-text {
        display: block;
        width: 100%;
        height: 36px;
        border-width: 0 0 2px 0;
        border-color: rgb(203, 210, 216);
        font-size: 18px;
        line-height: 26px;
        font-weight: 400;
    }
    
    .label {
        position: absolute;
        bottom: 11px;
        font-size: 18px;
        line-height: 26px;
        font-weight: 400;
        color: rgb(203, 210, 216);
        cursor: text;
        -webkit-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
    }
    
    .input-text:focus+.label {
        -webkit-transform: translateY(-24px);
        transform: translateY(-24px);
        color: grey;
        font-size: 12px;
    }
    

    
    .input-text:focus {
        outline: none;
        border-color: blue;
    
    }
    
    
    .input-invalid:focus {
        color: red;
    
    }
    
    .input-valid:focus {
        color: blue;
    
    }
    
    .contact-form .submit-btn {
        display: inline-block;
        background-color: #000;
        background-image: linear-gradient(125deg, #a72879, #064497);
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 16px;
        padding: 8px 16px;
        border: none;
        width: 200px;
        cursor: pointer;
    }
    
    .btn-login {
        position: relative;
        text-transform: uppercase;
        display: block;
        white-space: nowrap;
        text-align: center;
        width: 100%;
        font-size: 1, 5rem;
        font-weight: bolder;
        max-width: 100%;
        color: rgb(255, 255, 255) !important;
        border-radius: 40px;
        padding: 14px 20px;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        transition: all 150ms ease 0s;
    
    }
    
    .btn.disabled {
        background: rgb(203, 210, 216);
    }
    
    .btn-validate {
        background: linear-gradient(to right, rgb(30, 140, 248), rgb(57, 46, 249));
    }

    .logo-svg {
        width : 160px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom : 30px;
    }

         
     

    `}</style>
    </>
};

export default LoginForm;



