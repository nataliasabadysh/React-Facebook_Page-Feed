// Core
import React, { Component } from 'react';

// Instrument
import Styles from './styles.m.css';

export default class Login extends Component {
    _login = () => {
        this.props._login();
        this.props.history.replace('/feed');
    };

    render () {
        return (
            <section className = { Styles.login }>
                <button onClick = { this._login }>Login</button>
            </section>
        );
    }
}
