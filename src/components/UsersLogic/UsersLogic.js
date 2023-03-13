import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

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

    // We have a wrapping element, sure it's an element which won't render anything
    // to the DOM, but the requirement is not that there must be one root component
    // being rendered to the DOM. The requirement just is that there must be one root
    // element that you return or that you store in a constant or variable
    return (
        <>
            <AddUser onAddUser={addUserHandler} />
            <UsersList onDeleteUser={deleteUserHandler} users={usersList} />
        </>
    );
};

export default UsersLogic;
