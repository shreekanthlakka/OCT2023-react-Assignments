import { useEffect, useState } from "react";
import Address from "./Address";

const ACCESS_TOKEN = "pk.bba656e5866cd2f3e45a21c80cc27d000";
const BASE_URL = "https://us1.locationiq.com/v1";

export default function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);
    const [address, setAddress] = useState(null);
    const { lat, lng } = position;

    function getPosition() {
        if (!navigator.geolocation)
            return setError("Your browser does not support geolocation");

        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
                setIsLoading(false);
            },
            (error) => {
                setError(error.message);
                setIsLoading(false);
            }
        );
    }

    /**
     * const options = {method: 'GET', headers: {accept: 'application/json'}};

        fetch('https://us1.locationiq.com/v1/reverse?lat=15.66&lon=78.08&format=json&key=pk.bba656e5866cd2f3e45a21c80cc27d00', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
     * 
     */

    async function getAddressData(lat, lng) {
        try {
            const res = await fetch(
                `${BASE_URL}/reverse?lat=${lat}&lon=${lng}&format=json&key=${ACCESS_TOKEN}`,
                {
                    method: "GET",
                    headers: { accept: "application/json" },
                }
            );

            if (!res.ok) {
                throw new Error(" data not found");
            }

            const data = await res.json();
            setAddress(data.address);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (position.lat && position.lng) {
            getAddressData(position.lat, position.lng);
        }
    }, [position]);

    return (
        <div>
            <button onClick={getPosition} disabled={isLoading}>
                Get my position
            </button>

            {isLoading && <p>Loading position...</p>}
            {error && <p>{error}</p>}
            {!isLoading && !error && lat && lng && (
                <p>
                    Your GPS position: lat = {lat} lng = {lng}
                </p>
            )}
            {position.lat && position.lng && <Address address={address} />}
        </div>
    );
}
