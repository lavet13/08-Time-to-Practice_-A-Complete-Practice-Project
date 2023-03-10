import React from 'react';
import styles from './ErrorModal.module.css';
import otherStyles from '../UI/Hidden.module.css';
import Button from '../UI/Button';

const ErrorModal = ({ isError, onCloseErrorMessage, message }) => {
    const errorHandler = e => {
        e.preventDefault();
        onCloseErrorMessage();
    };

    return (
        <div
            className={`${styles.modal} ${
                !isError ? otherStyles.hidden : ''
            }`.trim()}
        >
            <Button onClick={errorHandler} className={styles.button}>
                &times;
            </Button>
            <div className={styles.content}>
                <span className={styles.red}>Error: </span>
                {message}
            </div>
        </div>
    );
};

export default ErrorModal;
