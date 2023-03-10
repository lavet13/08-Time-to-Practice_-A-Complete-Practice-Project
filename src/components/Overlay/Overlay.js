import React from 'react';
import styles from './Overlay.module.css';
import otherStyles from '../UI/Hidden.module.css';

const Overlay = ({ isError, onCloseErrorMessage }) => {
    const errorHandler = () => {
        onCloseErrorMessage();
    };

    return (
        <div
            onClick={errorHandler}
            className={`${styles.overlay} ${
                !isError ? otherStyles.hidden : ''
            }`.trim()}
        ></div>
    );
};

export default Overlay;
