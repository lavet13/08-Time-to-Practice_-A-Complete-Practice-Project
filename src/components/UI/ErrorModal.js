import React from 'react';
import styles from './ErrorModal.module.css';
import otherStyles from '../UI/Hidden.module.css';
import Button from '../UI/Button';
import Card from './Card';

const ErrorModal = ({ onConfirm, error }) => {
    const errorHandler = e => {
        e.preventDefault();
        onConfirm();
    };

    return (
        <div>
            <div
                onClick={errorHandler}
                className={`${styles.overlay} ${
                    !error ? otherStyles.hidden : ''
                }`.trim()}
            />
            <Card
                className={`${styles.card} ${
                    !error ? otherStyles.hidden : ''
                } ${error ? styles.fadeIn : ''}`.trim()}
            >
                <Button onClick={errorHandler} className={styles.button}>
                    &times;
                </Button>
                <div className={styles.content}>
                    <span className={styles.red}>Error: </span>
                    {error && error.message}
                </div>
            </Card>
        </div>
    );
};

export default ErrorModal;
