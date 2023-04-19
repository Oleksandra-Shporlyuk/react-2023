import React from 'react';

const Launch = ({launch}) => {
    const {flight_number,mission_name,launch_year} = launch;
    return (
        <div>
            <div><h3>flight_number:</h3> {flight_number}</div>
            <div><h3>mission_name:</h3> {mission_name}</div>
            <div><h3>launch_year:</h3> {launch_year}</div>
        </div>
    );
};

export default Launch;