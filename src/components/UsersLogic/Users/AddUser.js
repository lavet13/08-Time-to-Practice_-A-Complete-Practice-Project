import React, { useState, useRef } from 'react';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import ErrorModal from '../../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState(null);
    const errorHandler = () => {
        setError(null);
    };

    const addUserHandler = e => {
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        e.preventDefault();

        const isNotValidUsername = enteredName.trim().length === 0;
        if (isNotValidUsername) {
            setError({ message: "Username wasn't specified!" });
        }

        const ageIsNotANumber = !Number.isFinite(+enteredUserAge);
        const ageIsNotGreaterThanZero =
            Number.isFinite(+enteredUserAge) && !(enteredUserAge > 0);
        const isNotValidAge = ageIsNotANumber || ageIsNotGreaterThanZero;

        if (isNotValidAge) {
            if (ageIsNotANumber) setError({ message: "Age isn't a number!" });
            if (ageIsNotGreaterThanZero)
                setError({ message: 'Age must be greater than zero!' });
        }

        if (isNotValidAge || isNotValidUsername) return;

        const enteredUserData = {
            id: Math.random().toString(),
            username: enteredName.trim(),
            age: +enteredUserAge,
        };

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

        onAddUser(enteredUserData);
    };

    return (
        <>
            {error && <ErrorModal onConfirm={errorHandler} error={error} />}
            <Card className={styles.card}>
                <form onSubmit={addUserHandler}>
                    <div className={styles.controls}>
                        <div className={styles.control}>
                            <label htmlFor="username">Username</label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Enter a username"
                                ref={nameInputRef}
                            />
                        </div>

                        <div className={styles.control}>
                            <label htmlFor="age">Age (Years)</label>
                            <input
                                id="age"
                                type="number"
                                placeholder="Enter an age"
                                ref={ageInputRef}
                            />
                        </div>

                        <div className={styles.control}>
                            <Button className={styles.button} type="submit">
                                Add User
                            </Button>
                        </div>
                    </div>
                </form>
            </Card>
        </>
    );
};

export default AddUser;
