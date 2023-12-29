import React, { Component } from 'react'
import '../Dice.css';

class Die extends Component {

    render() {
        return(
            <i className={`Die fas fa-dice-${this.props.num} ${this.props.rolling &&
                "shaking"}`}
            />
        )
    }
};

export default Die;