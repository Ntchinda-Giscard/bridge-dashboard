"use client"
import '@mantine/core/styles.css';
import NextTopLoader from 'nextjs-toploader';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux'
import {store} from "@/app/store";
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { Toaster } from 'react-hot-toast';



export default function Providers({
    children,
  }: {
    children: React.ReactNode;
  }) {
  const adminSecret = "rGvtJPPzqVUtdlnOA47eMp3DhiiNqqAF";
    const httpLink = new HttpLink({
        uri: "https://cheerful-crane-98.hasura.app/v1/graphql", // Replace with your Hasura GraphQL URL
        headers: {
            "x-hasura-admin-secret": adminSecret, // Replace with your admin secret
        },
    });

// Create the Apollo Client instance
    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
    });

    return (
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body>
        <MantineProvider>
          <Toaster />
            <Provider store={store}>
                <ApolloProvider client={client}>
          <NextTopLoader
              color={"#0B8F23"}
              template='<div class="bar" role="bar"><div class="peg"></div></div>'
            />
            {children}
                </ApolloProvider>
            </Provider>
        </MantineProvider>
        </body>
      </html>
    );
  }