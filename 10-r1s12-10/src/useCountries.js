import { useState, useEffect } from "react";

const KEY = "f84fc31d";

export function useCountries(query) {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(
        function () {
            // callback?.();

            const controller = new AbortController();

            async function fetchCountries() {
                try {
                    setIsLoading(true);
                    setError("");

                    const res = await fetch(
                        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                        { signal: controller.signal }
                    );

                    if (!res.ok)
                        throw new Error(
                            "Something went wrong with fetching Countries"
                        );

                    const data = await res.json();
                    if (data.Response === "False")
                        throw new Error("Movie not found");

                    setCountries(data.Search);
                    setError("");
                } catch (err) {
                    if (err.name !== "AbortError") {
                        console.log(err.message);
                        setError(err.message);
                    }
                } finally {
                    setIsLoading(false);
                }
            }

            if (query.length < 3) {
                setCountries([]);
                setError("");
                return;
            }

            fetchCountries();

            return function () {
                controller.abort();
            };
        },
        [query]
    );

    return { countries, isLoading, error };
}
