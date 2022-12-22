import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchNow = (url) => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setData(response.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        if (url) fetchNow(url)
    }, [url])

    return { data, error, loading, fetchNow }
}

export default useFetch