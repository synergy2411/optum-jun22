import React from 'react';
import { gql, useQuery } from '@apollo/client';


const FETCH_HELLO = gql`
    query{
        hello
        }
`

const HelloGraphql = () => {
    const { data, error, loading } = useQuery(FETCH_HELLO);

    if(error) {
        return <p>Something bad happened</p>
    }
    if(loading){
        return <p>Loading....</p>
    }
    if(data){
        console.log("DATA : ", data);
        return (
            <div>
                <h4>{data.hello.toUpperCase()}</h4>
            </div>
        );
    }

}

export default HelloGraphql;
