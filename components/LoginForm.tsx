import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './Error';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router'


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('votre email est invalide')
        .required('Champ requis'),
    password: Yup.string().required('Champ requis')
})

function LoginForm() {

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
                        <div className="form-field">
                            <input
                                type="email"
                                id='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={values.email}
                                name="email" className={'input-text js-input ' + (touched.email && errors.email ? 'is-invalid input-color' : null)}
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
                                name="password" className={'input-text js-input ' + (touched.password && errors.password ? 'has errors' : null)}
                            />
                            <label htmlFor="email" className="label">Mot de passe</label>
                            <Error touched={touched.password} message={errors.password}></Error>
                        </div>
                        <button type="submit" className={'btn btn-login ' + ((touched.email && !errors.email) &&  !errors.password ? 'btn-validate' : 'disabled')} >connexion</button>
                        {errorLogin ? <div>votre mot de passe ou votre email est invalide</div> : null}
                    </form>
                </div>

            )}
        </Formik>
        <style jsx >{`
      .valid-feedback {
        color: green;
      }
      .login-wrapper {
        background-color: rgb(255, 255, 255);
        max-width: 480px;
        width: 96%;
        padding: 40px;
        border-radius: 8px;
        margin: 3% auto;

    }


    .contact-form .form-field {
      
        position: relative;
        margin-bottom: 60px;
        text-align: left;
      }
      .contact-form .input-text {
        display: block;
        width: 100%;
        height: 36px;
        border-width: 0 0 2px 0;
        border-color: rgb(203, 210, 216);
        font-size: 18px;
        line-height: 26px;
        font-weight: 400;
      }
      .contact-form .input-text:focus {
        outline: none;
        border-color: blue;
      }
      .contact-form .input-text:focus + .label,
.contact-form .input-text.not-empty + .label {
  -webkit-transform: translateY(-24px);
          transform: translateY(-24px);
    color: grey;
    font-size:12px;
    


}

.contact-form .label {
  position: absolute;
  bottom: 11px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color:rgb(203, 210, 216);
  cursor: text;
  -webkit-transition: all .2s ease-out;
  -moz-transition: all .2s ease-out;
  -ms-transition: all .2s ease-out;
  -o-transition: all .2s ease-out;
  transition: all .2s ease-out
}
.contact-form .submit-btn {
  display: inline-block;
  background-color: #000;
   background-image: linear-gradient(125deg,#a72879,#064497);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  width:200px;
  cursor: pointer;
}
.btn-login {
    position: relative;
    text-transform: uppercase;
    display: block;
    white-space: nowrap;
    text-align: center;
    width: 100%;
    font-size: 1,5rem;
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
    `}</style>
    </>
};

export default LoginForm;



