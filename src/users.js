import {API} from "./API";
import {useEffect, useState} from "react";
import {UsersList} from "./usersList";

export const Users = () => {

    const [users, setUsers] = useState();

    const fetchUsers = async () => await API.getUsers();

    useEffect(() => {
        fetchUsers()
            .then(r => setUsers(r));
    }, [])

    return (
        <div className="application-wrap">
            <h1 className="title">Users:</h1>
            {users ? <UsersList users={users}/> : null}
        </div>
    );
};