import React, {Component} from 'react'
import View from '../view';

class LeftLine extends Component {
    render () {
        return (<View style={{
            position: 'absolute',
            left: 0,
            top: 0,
            background: this.props.color ? this.props.color : '#D9D9D9',
            height: '100%',
            width: 1,
            transform: 'scaleX(0.5)',
            transformOrigin: '0 0'
        }} />)
    }
}

module.exports = LeftLine;