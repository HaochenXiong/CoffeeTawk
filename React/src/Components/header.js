import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';

class Header extends Component {
    state = {}
    render() {
        return (
            <Jumbotron>
                <h1 class="jumWord">☕CoffeeTawk☕</h1>
                <p class= "Word">Simple React App to collect data</p>
            </Jumbotron>
        )
    }
}

export default Header;