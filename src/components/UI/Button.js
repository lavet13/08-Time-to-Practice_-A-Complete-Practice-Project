import React from 'react';
import styles from './Button.module.css';

const Button = ({ type = 'button', children, className, onClick }) => {
    return (
        <button
            type={type}
            className={`${styles.button} ${className ?? ''}`.trim()}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
