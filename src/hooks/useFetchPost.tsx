/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetchPost = (url: string, data: any) => {
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (
            async () => {
                try {
                    if (data === undefined || data === null) {
                        throw new Error;
                    }
                    setLoading(true);
                    const response = await axios.post(url, data);
                    setResponse(response.data.data);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            }
        )()
    }, [url, data]);
    return { response, error, loading }
}

export default useFetchPost
