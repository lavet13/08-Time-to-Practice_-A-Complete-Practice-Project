import React, { useState } from 'react';
import styles from './App.module.css';
import UsersLogic from './components/UsersLogic/UsersLogic';
import Overlay from './components/Overlay/Overlay';
import ErrorModal from './components/ErrorModal/ErrorModal';

function App() {
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const saveErrorMessageHandler = errorMessage => {
        setErrorMessage(errorMessage);
    };

    const showErrorMessageHandler = () => {
        setIsError(true);
    };

    const closeErrorMessageHandler = () => {
        setIsError(false);
    };

    return (
        <div className={styles.container}>
            <UsersLogic
                onShowErrorMessage={showErrorMessageHandler}
                onSaveErrorMessage={saveErrorMessageHandler}
            />
            <Overlay
                onCloseErrorMessage={closeErrorMessageHandler}
                isError={isError}
            />
            <ErrorModal
                isError={isError}
                onCloseErrorMessage={closeErrorMessageHandler}
                message={errorMessage}
            />
        </div>
    );
}

export default App;
