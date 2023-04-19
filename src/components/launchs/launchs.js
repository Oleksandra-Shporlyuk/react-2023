import React, {useEffect, useState} from 'react';
import Launch from "../launch/launch";
import axios from "axios";

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    useEffect(()=> {
        axios('https://api.spacexdata.com/v3/launches/').then(value => value.data).then(value => {
                const filter = value.filter(item => item.launch_year!=="2020");
                setLaunches(filter);
            })
    }, [])


    return (
        <div>
            {
                launches.map((launch,index)=> <Launch key={index} launch={launch}/>)
            }
        </div>
    );
};

export default Launches;