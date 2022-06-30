import React, { useRef, useState } from 'react';
import { gql, mergeOptions, useMutation } from '@apollo/client';

const CREATE_USER = gql`
    mutation createNewUser($email: String!, $password: String! ){
        createUser(data:{
            email :$email,
            password:$password
        }){
            id
            email
        }
    }
`

const LOGIN = gql`
    mutation userLogin($email: String!, $password: String!){
        login(data:{
            email:$email
            password:$password
        }){
            token
        }
    }
`


const Login = () => {
    // Uncontrolled
    const inputUsernameRef = useRef(null);

    const [mutateFn, { data, error: mError, loading, called }] = useMutation(CREATE_USER)
    const [loginMutate, { data: loginData, error: loginError, loading: loginLoading }] = useMutation(LOGIN)

    // Controlled
    const [password, setPassword] = useState('')
    const [error, setError] = useState([])

    const submitHandler = event => {
        event.preventDefault();
        loginMutate({
            variables: {
                email: inputUsernameRef.current.value,
                password
            }
        })
    }

    if (loginData) {
        // console.log(loginData)
        localStorage.setItem("authToken", loginData.login.token)
    }

    const passwordBlurHandler = () => {
        if (password.length < 6) {
            setError(err => ["Password length too short", ...err])
        }
        if (password.indexOf("!") === -1) {
            setError(err => ["Password must have exclamation mark", ...err])
        }
    }

    const signupHandler = () => {
        mutateFn({
            variables: {
                email: inputUsernameRef.current.value,
                password
            }
        })
            .then(res => console.log(res))
            .catch(console.log)
    }
    if (mError) {
        console.log(mError);
        return <p>Something bad happened while creating the user</p>
    }
    return (
        <>
            <h4>Login / Signup Form</h4>
            {data && <h5>Hello {data.createUser.email}</h5>}
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
                <button className='btn btn-primary' type='submit'>Login</button>
                <button className='btn btn-secondary' onClick={signupHandler}>Sign Up</button>
            </form>
        </>
    );
}

export default Login;
