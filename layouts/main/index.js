import React, { Component } from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

const containerId = 'GTM-M9WLP5B'

const Page = ({ title, children }) => (
    <div>
        <Head>
            <title>{title} | BIG</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/static/favicon.ico" sizes="32x32 48x48" type="image/vnd.microsoft.icon" />

            <script dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${containerId}');`
            }} />

            <link rel='stylesheet' href='/static/react-md.light_blue-yellow.min.css' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Material+Icons' />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${containerId}" height="0" width="0" style="display:none;visibility:hidden;"></iframe>` }} />
        <main>
            {children}
        </main>
        <Footer />
        <style jsx global>{`
            html {
                background-color: white;
            }

            .md-toolbar--themed {
                background-color: rgba(255, 255, 255, 0.95);
            }

            body { 
                margin: 0px;
            }

            section {
                display: flex;
                flex-flow: row wrap;
                align-items:center;
                justify-content: space-around;
                padding: 2rem;
            }

            @media only screen and (min-width: 600px) { 
                section {
                    padding: 4rem;
                }
            }
        `}</style>
    </div>
)

Page.Header = Header

export default Page