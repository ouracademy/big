import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'

const Page = ({ children }) => (
    <div>
        <main>
            {children}
        </main>
        <Footer />
    </div>
)

Page.Header = Header

export default Page