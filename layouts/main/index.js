import React, { Component } from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

const Page = ({ title, children }) => (
    <div>
        <Head>
            <title>{title} | BIG</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
            <link rel="icon" href="/static/favicon.ico" sizes="32x32 48x48" type="image/vnd.microsoft.icon" />

            <link rel='stylesheet' href='/static/react-md.light_blue-yellow.min.css' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Material+Icons' />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <main>
            {children}
        </main>
        <Footer />
        <style jsx global>{`
            html, .md-toolbar--themed {
                background-color: white;
            }

            body { 
                margin: 0px;
            }

            section {
                display: flex;
                flex-flow: row wrap;
                align-items:center;
                justify-content: space-around;
                padding: 4rem;
            }
        `}</style>
    </div>
)

Page.Header = Header

export default Page