import  React from 'react';
import styles from './Error.module.css';



const Error = ({touched, message}) => {
    if (!touched) {
        return <div className={styles.invalid}>&nbsp;</div>;
    }

    if (message) {
        return <div className={styles.invalid}>{message}</div>;
    }

    return <div className={styles.valid}>all good</div>
    ;
}


export default Error;
