import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = ({ onConfirm }) => {
    return <div onClick={onConfirm} className={styles.backdrop} />;
};

export default Backdrop;
