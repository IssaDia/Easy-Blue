import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './Error';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router'


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('votre email est invalide')
        .required('votre email est requis'),
    password: Yup.string().required('votre mot de passe est requis')
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
            {({ touched, values, errors, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id='email'
                            placeholder="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={values.email}
                            name="email" className={'form-control ' + (touched.email && errors.email ? 'is-invalid' : null)}
                        />
                        <Error touched={touched.email} message={errors.email}></Error>
                    </div>
                    <div className='input-row'>
                        <label htmlFor="email">Mot de passe</label>
                        <input
                            type="password"
                            id='password'
                            placeholder="Mot de passe"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={values.password}
                            name="password" className={'form-control ' + (touched.password && errors.password ? 'has errors' : null)}
                        />
                        <Error touched={touched.password} message={errors.password}></Error>
                    </div>
                    <button type="submit" className='btn btn-white' disabled={isSubmitting}>Submit</button>
                    {errorLogin ? <div>error</div> : null}
                </form>
            )}
        </Formik>
        <style jsx >{`
      .valid-feedback {
        color: green;
      }
    `}</style>
    </>
};

export default LoginForm;



