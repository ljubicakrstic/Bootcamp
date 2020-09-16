import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return(
        <nav>
            <Link to='/'>Svi korisnici</Link>
            <Link to='/pretraga'>Pretrazi korisnike</Link>
        </nav>
    )
}

export default Navigation;