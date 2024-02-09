/*eslint-disable react/prop-types*/

function Address({ address }) {
    return (
        <>
            {address ? (
                <div>
                    <h2>State : {address?.state}</h2>
                    <h3>Dist : {address?.state_district}</h3>
                    <h3>Pincode : {address?.postcode}</h3>
                    <p>
                        Town : {address?.village} , {address?.county}
                    </p>
                </div>
            ) : (
                <h1>Reload the page to see an address</h1>
            )}
        </>
    );
}

export default Address;
