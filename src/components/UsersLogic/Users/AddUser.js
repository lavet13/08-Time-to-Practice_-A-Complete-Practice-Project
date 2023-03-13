import React, { useState } from 'react';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import ErrorModal from '../../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
    const [error, setError] = useState(null);
    const errorHandler = () => {
        setError(null);
    };

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidAge, setIsValidAge] = useState(true);

    const usernameInputHandler = e => {
        if (e.target.value.trim().length > 0) setIsValidUsername(true);

        setEnteredUsername(e.target.value);
    };

    const ageInputHandler = e => {
        if (Number.isFinite(+e.target.value) && +e.target.value > 0)
            setIsValidAge(true);

        setEnteredAge(e.target.value);
    };

    const addUserHandler = e => {
        e.preventDefault();

        const isNotValidUsername = enteredUsername.trim().length === 0;
        if (isNotValidUsername) {
            setIsValidUsername(false);
            setError({ message: "Username wasn't specified!" });
        }

        const ageIsNotANumber = !Number.isFinite(+enteredAge);
        const ageIsNotGreaterThanZero =
            Number.isFinite(+enteredAge) && !(enteredAge > 0);
        const isNotValidAge = ageIsNotANumber || ageIsNotGreaterThanZero;

        if (isNotValidAge) {
            setIsValidAge(false);
            if (ageIsNotANumber) setError({ message: "Age isn't a number!" });
            if (ageIsNotGreaterThanZero)
                setError({ message: 'Age must be greater than zero!' });
        }

        if (isNotValidAge || isNotValidUsername) return;

        const enteredUserData = {
            id: Math.random().toString(),
            username: enteredUsername.trim(),
            age: +enteredAge,
        };

        setEnteredAge('');
        setEnteredUsername('');

        onAddUser(enteredUserData);
    };

    return (
        <>
            {error && <ErrorModal onConfirm={errorHandler} error={error} />}
            <Card className={styles.card}>
                <form onSubmit={addUserHandler}>
                    <div className={styles.controls}>
                        <div
                            className={`${styles.control} ${
                                !isValidUsername ? styles.invalid : ''
                            }`.trim()}
                        >
                            <label htmlFor="username">Username</label>
                            <input
                                id="username"
                                onChange={usernameInputHandler}
                                value={enteredUsername}
                                type="text"
                                placeholder="Enter a username"
                            />
                        </div>

                        <div
                            className={`${styles.control} ${
                                !isValidAge ? styles.invalid : ''
                            }`.trim()}
                        >
                            <label htmlFor="age">Age (Years)</label>
                            <input
                                id="age"
                                onChange={ageInputHandler}
                                value={enteredAge}
                                type="number"
                                placeholder="Enter an age"
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
