import Country from "./Country";

const CountryList = ({countries, visitCountry}) => {

    const countryComponents = countries.map((country) => <Country country ={country} visitCountry = {visitCountry} />);

    return (  
        <>
        <h3>Country List</h3>
        <ul>
            {countryComponents}
        </ul>
        </>
    );
}
 
export default CountryList;