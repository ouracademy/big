import React, { Component } from 'react'
import Toolbar from 'react-md/lib/Toolbars'
import Button from 'react-md/lib/Buttons'
import Head from 'next/head'

const unScrolled = { logo: '/static/big-alternate.png', style: { backgroundColor: 'transparent', boxShadow: "none" } }
const scrolled = { logo: '/static/big.png', style: { backgroundColor: 'white' } }

export default class Header extends Component {
    constructor() {
        super()
        this.state = unScrolled
    }

    componentDidMount() {
        if (window) {
            window.onscroll = (evt) => {
                const { scrollTop } = evt.target.body
                if (scrollTop < 440) {
                    this.setState(() => { return unScrolled })
                } else {
                    this.setState(() => { return scrolled })
                }
            }
        }
    }

    render() {
        return (
            <div>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel='stylesheet' href='/static/react-md.light_blue-yellow.min.css' />
                    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
                    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Material+Icons' />
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <style>{`
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
                </Head>
                <Toolbar fixed
                    style={this.state.style}
                    title={<img src={this.state.logo} style={{ height: "70%", marginTop: "0.5%" }} />}
                    actions={[<Button flat primary iconBefore={false} label="Bienvenido">insert_emoticon</Button>]}
                />
            </div>
        )
    }
}