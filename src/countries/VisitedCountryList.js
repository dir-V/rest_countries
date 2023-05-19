import Country from "./Country";

const VisitedCountryList = ({countries}) => {

    const countryComponents = countries.map((country) => <Country country ={country} />);

    return (  
        <>
        <h3>Visted List List</h3>
        <ul>
            {countryComponents}
        </ul>
        </>
    );
}
 
export default VisitedCountryList;