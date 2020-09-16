import React from 'react';
import User from './User';

const Users = ({users, setUsers}) => {

    return (
        users.map(user => <User key={user.id} user={user} users={users} setUsers={setUsers}/>)
    )
}

export default Users; 