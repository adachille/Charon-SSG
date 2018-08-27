import React from 'react';
import logo from './logo.svg';

export default () => {
    return (
        <div className="custom-navbar">
            <div className="brand">
                <h1>Charon SSG <img className="logo" src={logo}/></h1>
            </div>
        </div>
    )
}