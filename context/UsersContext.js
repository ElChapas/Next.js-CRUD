import React, { createContext, useContext, useState, useEffect } from "react";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false)
    const [actualUser, setActualUser] = useState({})

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const res = await fetch(`api/users`);
        const data = await res.json();
        setUsers(data.data)
    };

    return (
        <UsersContext.Provider
            value={{
                users,
                setUsers,
                getUsers,
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};

export { UsersContext, UsersProvider };
