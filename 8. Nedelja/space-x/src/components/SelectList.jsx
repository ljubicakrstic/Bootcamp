import React from 'react';

const SelectList = ({launches, setYear}) => {


    const onlyUnique = (value, index, self) => { 
        return self.indexOf(value) === index;
    }

    let unique = launches.map(launch => launch.launch_year).filter(onlyUnique);

    return(
        <select id='select-year' onChange={(e) => setYear(e.target.value)}>
            <option value='' selected disabled>Select a year</option>
            {unique.map(launchYear => <option key={launchYear} value={launchYear}>{launchYear}</option>)}
        </select>
    )
}

export default SelectList;