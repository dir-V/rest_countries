import { useEffect, useState } from "react";

const CountryContainer = () => {
    
    const [country, setCountry] = useState(0);
    
    const getCountries = async () => {

        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountry(data);
    }

    useEffect(() => {
        getCountries();
        
}, [])

    const handleVisted = (country) => {

        setCountry((oldCountry) => oldCountry.map((countryVisted) => {
            if (countryVisted.name.common === country.name.common) {
            const updatedCountry = {...countryVisted, visited: !countryVisted.visited};
            }
        
        })
        );
    };

    return ( 
        <div className="countries">
        {country ? (
            <ul className="countriesList">
                {country.map((country) => (<li key={country.name.common}>{country.name.common}</li>))}              
                <input
                type="submit"
                value = "Submit"
                onChange={() => handleVisted(country)}
              />

            </ul>) : (<p>Loading countries...</p>)}

      </div>
    );
}

export default CountryContainer;

