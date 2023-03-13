import React from 'react';
import styles from './App.module.css';
import UsersLogic from './components/UsersLogic/UsersLogic';

function App() {
    return (
        <div className={styles.container}>
            <UsersLogic />
        </div>
    );
}

export default App;
