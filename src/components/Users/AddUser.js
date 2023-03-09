import React from 'react';
import styles from './AddUser.module.css';

const AddUser = () => {
    const addUserHandler = e => {
        e.preventDefault();
    };

    return (
        <form className={styles['add-user-form']} onSubmit={addUserHandler}>
            <div className={styles['add-user-form__controls']}>
                <div className={styles['add-user-form__control']}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter username"
                    />
                </div>
                <div className={styles['add-user-form__control']}>
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        min="1"
                        max="100"
                        placeholder="Enter age"
                    />
                </div>
                <div className={styles['add-user-form__control']}>
                    <button type="submit">Add User</button>
                </div>
            </div>
        </form>
    );
};

export default AddUser;
