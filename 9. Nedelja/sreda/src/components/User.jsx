import React from 'react';

const User = ({user, users, setUsers}) => {

    const deleteUser = (id) => {
        let tmp = [...users];
        tmp.splice(tmp.findIndex(el => el.id === id), 1);
        setUsers(tmp);
    }

    return(
        <>
        <p>{user.first_name} {user.last_name}</p>
        <button onClick={() => deleteUser(user.id)} className={setUsers === undefined ? 'hidden' : 'button'}>Obrisi</button>
        </>
    )
}

export default User;