import React from "react";
import UseFetch from "./UseFetch";


const FetchYoga = () => {
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');

    return (
        <>
         <ul className='list_data_main'>
                <h1 className='usefetch_heading'>Yoga-Benefits</h1>
                {data && data.map((e) => (
                    <>
                        <li className='list_data'>
                            <h3>{e.name}</h3>
                            <p><strong>Name: </strong>{e.name}</p>
                            <p><strong>Benefits: </strong>{e.benefits6}</p>
                            <p><strong>Time Duration: </strong>{e.time_duration}</p>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}
export default FetchYoga