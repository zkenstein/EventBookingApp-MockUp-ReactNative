/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import Router from "./src/routes/Router";
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";

class App extends Component {
  render() {

    // Create the client as outlined in the setup guide
    const client = new ApolloClient({
      uri: "https://48p1r2roz4.sse.codesandbox.io"
    });

    return (
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    );
  }
}

export default App;
