import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../context/UsersContext";
const SearchCard = () => {
    const { users, setEditMode, setActualUser } = useContext(UsersContext);
    const [search, setSearch] = useState("");
    const [userSearch, setUserSearch] = useState([]);

    useEffect(() => {
        if (users.length) {
            console.log('USERS CAMBIO');
            setUserSearch(users);
        }
    }, [users]);

    const handleSearch = async (e) => {
        const input = e.target.value.toLowerCase().trim();
        if (input.length > 1) {
            //avoid 1 letter search
            const filteredData = users.filter((user) => {
                return Object.keys(user).some((key) => {
                    return user[key].toString().toLowerCase().includes(input) || 
                    `${user.nombre.toLowerCase()} ${user.apellido.toLowerCase()}`.includes(input);
                });
            });
            setUserSearch(filteredData);
        } else {
            setUserSearch(users);
        }
    };

    const handleClickUser = (user) => {
        setEditMode(true)
        setActualUser(user)
    };

    return (
        <div className="card">
            <div className="search-card">
                <div className="search-section">
                    <input
                        className="input search-input"
                        placeholder="Buscar"
                        type="text"
                        onChange={(e) => handleSearch(e)}
                    />
                    <i className="fas fa-search search-icon"></i>
                </div>
                <div className="list-section">
                    <div className="list">
                        {userSearch &&
                            userSearch.map((user, index) => {
                                return (
                                    <div
                                        className="list-item"
                                        key={index}
                                        onClick={() => handleClickUser(user)}
                                    >
                                        <span>
                                            {user.nombre} {user.apellido} (
                                            {user.telefono})
                                        </span>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;
