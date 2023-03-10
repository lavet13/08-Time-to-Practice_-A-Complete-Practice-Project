import React from 'react';
import Card from '../../UI/Card';
import styles from './UsersList.module.css';
import UserItem from './UserItem';

const UsersList = ({ users, onDeleteUser }) => {
    return (
        <Card className={styles.card}>
            <ul className={styles.list}>
                {users.length > 0 &&
                    users.map(({ id, username, age }) => (
                        <UserItem
                            key={id}
                            id={id}
                            onDelete={onDeleteUser}
                            username={username}
                            age={age}
                        />
                    ))}
                {users.length < 1 && (
                    <p className={styles.message}>
                        No users was entered! Please enter one!
                    </p>
                )}
            </ul>
        </Card>
    );
};

export default UsersList;
