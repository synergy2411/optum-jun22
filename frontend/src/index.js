import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const httpLink = createHttpLink({
  uri : "http://localhost:9090/graphql"
})

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem("authToken")
  return {
    headers :{
      ...headers,
      authorization : token ? `Bearer ${token}` : ''
    }
  }
}) 

const client = new ApolloClient({
  link : authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>
);


