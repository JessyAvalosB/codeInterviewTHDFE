/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { BASE_URL_USERS } from '../constants';
import axios from 'axios';
import { IUser } from '../interfaces/Users';

const useLogin = ({email, password}: IUser) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        (
            async () => {
                try {
                    if ((email === null && password === null || (email === undefined && password === undefined))) {
                        throw new Error;
                    }
                    setLoading(true);
                    const response = await axios.post(BASE_URL_USERS, { email, password });
                    console.log(response)
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            }
        )()
    }, [email, password]);
    return { data, error, loading }
}

export default useLogin
