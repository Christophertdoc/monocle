  
import React from 'react'
import './App.css'
import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost"
import Data from "./components/Data"


function App() {

    const httpLink = new HttpLink({
        uri: "https://monocle-hasura.herokuapp.com/v1/graphql"
    })

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    })

    return (
        <ApolloProvider client={client}>
            <Data />
        </ApolloProvider>
    )
}

export default App
