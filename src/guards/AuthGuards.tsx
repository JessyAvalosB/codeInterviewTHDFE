/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getProfile } from '../services/auth';

const AuthGuard = ({ component }: { component: any }) => {
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        checkToken();
    }, [component]);

    const checkToken = async () => {
        try {
            const user = await getProfile(true);
            if (!user) {
                navigate(`/signIn`);
            }
            setStatus(true);
            return;
        } catch (error) {
            navigate(`/signIn`);
        }
    }

    return status && <>{component}</>;
}
export default AuthGuard;
