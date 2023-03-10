import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

const UsersLogic = ({ onShowErrorMessage, onSaveErrorMessage }) => {
    const addUserHandler = enteredUserData => {
        setUsersList(prevUsersList => [enteredUserData, ...prevUsersList]);
    };

    const deleteUserHandler = deleteId => {
        setUsersList(prevUsersList =>
            prevUsersList.filter(({ id }) => id !== deleteId)
        );
    };

    const [usersList, setUsersList] = useState([]);

    return (
        <div>
            <AddUser
                onAddUser={addUserHandler}
                onShowErrorMessage={onShowErrorMessage}
                onSaveErrorMessage={onSaveErrorMessage}
            />
            <UsersList onDeleteUser={deleteUserHandler} users={usersList} />
        </div>
    );
};

export default UsersLogic;
