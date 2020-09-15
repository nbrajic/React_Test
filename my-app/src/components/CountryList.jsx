import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CountryList = ({countries,show}) => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(0)
    },[countries])

    return (
        <>
            {show ? 
                countries.slice(count,count+10).map(country =>
                    <div key={country.name}>
                        <h3>{country.name}</h3>
                        <p>Population:{country.population}</p>
                        <img 
                            src={country.flag} 
                            alt=""
                            style={{width: "300px", border: "1px solid black"}}
                        ></img>
                    </div>
                )
            :
                countries.slice(count,count+10).map(country => 
                    <img 
                        src={country.flag} 
                        alt="" 
                        key={country.name} 
                        style={{width: "100px", border: "1px solid black"}}
                    ></img>
                )
            }
            <hr></hr>
            <button disabled={count === 0} onClick={() => setCount(count - 10)}>BACK</button>
            <button disabled={count > countries.length - 10} onClick={() => setCount(count + 10)}>NEXT</button>
        </>
    )
};

export default CountryList;