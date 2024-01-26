/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url: string) => {

    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (
            async () => {
                try {
                    setLoading(true);
                    const response = await axios.get(url);
                    setData(response.data.data);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            }
        )()
    }, [url])
    return { data, error, loading }
}

export default useFetch;
