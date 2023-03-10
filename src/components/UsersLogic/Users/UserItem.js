import React from 'react';
import styles from './UserItem.module.css';

const UserItem = ({ id, username, age, onDelete }) => {
    const deleteItemHandler = () => {
        onDelete(id);
    };

    return (
        <li onClick={deleteItemHandler} className={styles.li}>
            <span>
                {username} ({age} years old)
            </span>
        </li>
    );
};

export default UserItem;
