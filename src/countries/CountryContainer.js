import { useEffect, useState } from "react";
import CountryList from "./CountryList";
import VisitedCountryList from "./VisitedCountryList";

const CountryContainer = () => {
    
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    
    const getCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
    }

    useEffect(() => {
        getCountries();
}, [])

    const visitCountry = (country => {
        setVisitedCountries([...visitedCountries, country ])
    })
 

    return ( 
        <div className="countries">
            <CountryList countries = {countries}  visitCountry = {visitCountry}/>
            <VisitedCountryList  countries = {visitedCountries}/>

      </div>
    );
}

export default CountryContainer;

