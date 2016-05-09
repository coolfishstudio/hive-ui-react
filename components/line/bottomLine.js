import React, {Component} from 'react'
import View from '../view';

class BottomLine extends Component {
    render () {
        return (<View style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            background: this.props.color ? this.props.color : '#D9D9D9',
            width: '100%',
            height: 1,
            transform: 'scaleY(0.5)',
            transformOrigin: '0 0'
        }} />)
    }
}

module.exports = BottomLine;