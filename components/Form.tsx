import React from 'react';
import { Formik } from 'formik';

const Form: React.FC = ({ }) => (
    <>
        <section className="get-in-touch">
            <h1 className="title">Easy Blue</h1>
            <Formik initialValues={{ email: '', password: '' }} onSubmit={(values) => console.log(values)
            }>
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                    <form className="contact-form row"  onSubmit={handleSubmit}>
                        <div className="form-field col-lg-6 ">
                            <input id="email" className="input-text js-input" type="email" required onChange={handleChange} defaultValue={values.email} onBlur={handleBlur}/>
                            <label className="label">Adresse e-mail</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <input id="password" className="input-text js-input" type="text" required onChange={handleChange} defaultValue={values.password} onBlur={handleBlur} />
                            <label className="label" >Mot de passe</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input className="submit-btn" type="submit" value="CONNEXION" />
                        </div>
                        <div className="form-field col-lg-12">
                            <input className="submit-btn" type="submit" value="MOT DE PASSE OUBLIE" />
                        </div>
                    </form>
                )}

            </Formik>

        </section>
      
    </>
);

export default Form;



