import React from 'react';
import Launch from './Launch';

const LaunchList = ({launches, year}) => {

    const filtered = launches.filter(launch => launch.launch_year.includes(year));

    return (
        <div className='launch-list'>
            {filtered.map(launch => <Launch launch={launch} key={launch.flight_number}/>)}
        </div>
    )
}

export default LaunchList;