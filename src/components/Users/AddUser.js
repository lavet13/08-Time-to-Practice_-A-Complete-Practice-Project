import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = () => {
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

        if (enteredUsername.trim().length === 0) {
            setIsValidUsername(false);
        }

        if (
            !Number.isFinite(+enteredAge) ||
            (Number.isFinite(+enteredAge) && !(enteredAge > 0))
        ) {
            setIsValidAge(false);
        }

        if (
            !Number.isFinite(+enteredAge) ||
            (Number.isFinite(+enteredAge) && !(enteredAge > 0)) ||
            enteredUsername.trim().length === 0
        )
            return;

        const enteredData = {
            username: enteredUsername.trim(),
            age: Number.parseInt(enteredAge),
        };

        setEnteredAge('');
        setEnteredUsername('');

        console.log(enteredData);
    };

    return (
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
    );
};

export default AddUser;
