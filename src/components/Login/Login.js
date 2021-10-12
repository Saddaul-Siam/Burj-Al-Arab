import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { LoginWithGoogle, user, SingnOut } = useFirebase()
    return (
        <div>
            <h2>This is {user.email}</h2>
            {user.email ? <button onClick={SingnOut}>Sign Out</button>
                : <button onClick={LoginWithGoogle}>Google Sign In</button>
            }
        </div>
    );
};

export default Login;