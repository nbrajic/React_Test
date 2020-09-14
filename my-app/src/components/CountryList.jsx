import React from 'react';

const CountryList = ({countries,show}) => {
    return (
        <>
            {show ? 
                countries.map(country =>
                    <div key={country.name}>
                        <h3>{country.name}</h3>
                        <p>Population:{country.population}</p>
                        <img 
                            src={country.flag} 
                            alt=""
                            style={{width: "300px"}}
                        ></img>
                    </div>
                )
            :
                countries.map(country => 
                    <img 
                        src={country.flag} 
                        alt="" 
                        key={country.name} 
                        style={{width: "100px"}}
                    ></img>
                )
            }
        </>
    )
};

export default CountryList;