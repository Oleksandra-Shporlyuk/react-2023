import React from 'react';

const User = ({user,setUsersId}) => {
    const {id, name, email, username} = user;
    return (
        <div className={'userBlock'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button onClick={()=>setUsersId(id)}>Get Posts</button></div>
    );
};

export default User;