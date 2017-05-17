import React, { Component } from 'react'
import Toolbar from 'react-md/lib/Toolbars'
import Button from 'react-md/lib/Buttons'
import Head from 'next/head'
import Router from 'next/router'

const unScrolled = { logo: '/static/big-alternate.png', themed: false }
const scrolled = { logo: '/static/big.png', themed: true }

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
                    <style jsx global>{`
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

                        .logo {
                            height: 70%;
                            margin-top: 1%
                        }

                        .app-bar {
                            box-shadow: none;
                        }

                    `}</style>
                </Head>
                <Toolbar fixed themed={this.state.themed}
                    className="app-bar"
                    title={<a onClick={() => Router.push('/')}><img className="logo" src={this.state.logo} /></a>}
                    actions={[<Button flat primary iconBefore={false} label="Bienvenido">insert_emoticon</Button>]}
                />
            </div>
        )
    }
}
