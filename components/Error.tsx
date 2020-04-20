import  React from 'react'
import styles from './Error.module.css'

/**
  * Error component, called when Form error through Yup
  */

const Error = ({touched, message}) => {
    if (!touched) {
        return <div className={styles.invalid}>&nbsp;</div>;
    }

    if (message) {
        return <div className='invalid'>{message}</div>;
    }

    return null;
    ;
}

export default Error;