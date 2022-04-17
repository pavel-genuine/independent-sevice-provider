import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div>
            <h3 className='text-center'>Services: </h3>
            <div className='row w-100' style={{paddingLeft:'300px'}} >
                {
                    console.log(services)
                }
                {
                    services.map(service=><Service key={service.id} service={service} ></Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;