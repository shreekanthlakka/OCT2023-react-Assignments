import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";

const URI = "https://restcountries.com/v3.1/all";

/**
 *
 *
 * https://restcountries.com/v3.1/alpha?codes=170,no,est,pe
 */

function App() {
    const [countries, setCountries] = useState([]);
    const [selectedId, setSelectedId] = useState();

    const borders = countries.filter(
        (country) => Number(country.ccn3) === selectedId
    )[0]?.borders;

    console.log(borders);

    useEffect(() => {
        async function fetchCountries() {
            const res = await axios.get(URI);
            setCountries(res.data);
            console.log(res.data);
        }
        fetchCountries();
    }, []);

    // async function fetchSingleCountryData(cca3) {
    //     const country = await axios.get(
    //         `https://restcountries.com/v3.1/alpha?codes=${cca3}`
    //     );
    //     return country;
    // }

    return (
        <div>
            {countries.length > 0 && (
                <select
                    value={selectedId}
                    onChange={(e) => setSelectedId(Number(e.target.value))}
                >
                    <option value={0}>Select a country</option>
                    {countries.map((country) => (
                        <option value={country.ccn3} key={country.name.common}>
                            {country.name.common}
                        </option>
                    ))}
                </select>
            )}
            <p>{selectedId}</p>

            {selectedId > 0 && (
                <Table
                    countries={countries}
                    borders={borders}
                    selectedId={selectedId}
                />
            )}
        </div>
    );
}

export default App;
