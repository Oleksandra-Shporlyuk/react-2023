import React, {useEffect, useState} from 'react';
import axios from "axios";
import User from "../user/user";

const Users = ({setUsersId}) => {

    const [users, setUsers] = useState([]);
    useEffect(()=> {
        axios('https://jsonplaceholder.typicode.com/users').then(value => value.data).then(value => setUsers(value))

    }, [])

    return (
        <div>
            {
                users.map(user=><User key={user.id} user={user} setUsersId={setUsersId}/>)
            }
        </div>
    );
};

export default Users;