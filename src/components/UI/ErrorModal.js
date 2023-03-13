import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import styles from './ErrorModal.module.css';
import Button from '../UI/Button';
import Card from './Card';

const ErrorModal = ({ onConfirm, error }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={onConfirm} />,
                document.querySelector('#backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Card className={`${styles.card} ${styles.fadeIn}`}>
                    <Button onClick={onConfirm} className={styles.button}>
                        &times;
                    </Button>
                    <div className={styles.content}>
                        <span className={styles.red}>Error: </span>
                        {error.message}
                    </div>
                </Card>,
                document.querySelector('#overlay-root')
            )}
        </>
    );
};

export default ErrorModal;
