import React, { useState } from 'react';
import User from './User';

const Filter = ({users}) => {

    const [filtered, setFiltered] = useState([]);

    const filterUsers = (value) => {
        setFiltered(users.filter(user => user.first_name.includes(value)));
    }

    return(
        <>
        <input type='text' placeholder='Pretraga...' onChange={(e) => filterUsers(e.target.value)}/>
        {filtered.map(user => <User key={user.id} user={user} users={filtered} setUsers={setFiltered}/>)}
        </>
    )
}

export default Filter;