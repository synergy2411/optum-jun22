import React, { useRef, useState } from 'react';

const Login = () => {
    // Uncontrolled
    const inputUsernameRef = useRef(null);

    // Controlled
    const [password, setPassword] = useState('')
    const [error, setError] = useState([])

    const submitHandler = event => {
        event.preventDefault();
        console.log("USERNAME  : ", inputUsernameRef.current.value)
        console.log("PASSWORD : ", password);
    }

    const passwordBlurHandler = () => {
        if (password.length < 6) {
            setError(err => ["Password length too short", ...err])
        }
        if (password.indexOf("!") === -1) {
            setError(err => ["Password must have exclamation mark", ...err])
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <label>Username : </label>
            <input type="text" name='username' ref={inputUsernameRef} />
            <br />
            <label>Password : </label>
            <input type="password" name='password'
                value={password} onChange={event => setPassword(event.target.value)}
                onBlur={passwordBlurHandler} />
            <ul>
                {error.map(err => <li key={err}>{err}</li>)}
            </ul>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default Login;
