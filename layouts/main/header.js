import React, { Component } from 'react'
import Toolbar from 'react-md/lib/Toolbars'
import Button from 'react-md/lib/Buttons'
import Router from 'next/router'

const alternateStyle = { logo: '/static/big-alternate.png', themed: false }
const principalStyle = { logo: '/static/big.png', themed: true }

export default ({ alternate }) => {
    const style = alternate ? alternateStyle : principalStyle

    return (
        <div>
            <style jsx>{`
                div :global(.logo) {
                    height: 3.2rem;
                    margin-top: 7px;
                }
            `}</style>
            <Toolbar fixed themed={style.themed}
                style={{ boxShadow: "none" }}
                title={<a onClick={() => Router.push('/')}><img className="logo" src={style.logo} /></a>}
                actions={[<Button flat primary iconBefore={false} label="Bienvenido">insert_emoticon</Button>]}
            />
        </div>
    )
}