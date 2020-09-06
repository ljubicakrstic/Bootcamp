import React from 'react';
import Emoji from './Emoji';
import Description from './Description';

const Card = ({url, description}) => {
    return(
        <>
        <Emoji url={url}/>
        <Description description={description}/>
        </>
    )
}

export default Card;