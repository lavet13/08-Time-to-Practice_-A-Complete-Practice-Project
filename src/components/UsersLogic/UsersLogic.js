import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';
import ErrorModal from '../UI/ErrorModal';

const UsersLogic = () => {
    const addUserHandler = enteredUserData => {
        setUsersList(prevUsersList => [enteredUserData, ...prevUsersList]);
    };

    const deleteUserHandler = deleteId => {
        setUsersList(prevUsersList =>
            prevUsersList.filter(({ id }) => id !== deleteId)
        );
    };

    const [usersList, setUsersList] = useState([]);

    /////////////////////////////////////////////////////
    const [error, setError] = useState(null);

    const showErrorMessageHandler = message => {
        setError({ message });
    };

    const closeErrorMessageHandler = () => {
        setError(null);
    };

    return (
        <div>
            <AddUser
                onAddUser={addUserHandler}
                onShowErrorMessage={showErrorMessageHandler}
            />
            <UsersList onDeleteUser={deleteUserHandler} users={usersList} />
            <ErrorModal onConfirm={closeErrorMessageHandler} error={error} />
        </div>
    );
};

export default UsersLogic;
