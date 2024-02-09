/*eslint-disable react/prop-types*/

function Table({ countries, borders, selectedId }) {
    return (
        <div>
            <h1>
                Neighbouring Countries of{" "}
                {
                    countries.filter(
                        (country) => +country.ccn3 === selectedId
                    )[0].name.common
                }
            </h1>

            <table>
                <tr>
                    <th>Flag symbol</th>
                    <th>Country Name</th>
                    <th>Capital</th>
                </tr>
                {borders.map((code) => (
                    <tr key={code}>
                        <th>
                            {
                                countries.filter(
                                    (country) => country.cca3 === code
                                )[0].flag
                            }
                        </th>
                        <th>
                            {
                                countries.filter(
                                    (country) => country.cca3 === code
                                )[0].name.common
                            }
                        </th>
                        <th>
                            {
                                countries.filter(
                                    (country) => country.cca3 === code
                                )[0].capital[0]
                            }
                        </th>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default Table;
