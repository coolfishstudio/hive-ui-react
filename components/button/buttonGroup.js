import React, {Component} from 'react'
import classNames from 'classNames'

import './style/buttonGroup.less'

class ButtonGroup extends Component {
    render () {
        const sizeCls = { 'large': 'lg', 'small': 'sm'}
        const { size='default' } = this.props
        
        return <div className={
            classNames(
                'hive-btn-group', 
                (size && size !== 'default' && 'hive-btn-group-' + sizeCls[size]),
                (this.props.className && this.props.className)
            )}
            style={ this.props.style }>
            {this.props.children}
        </div>
    }
}

module.exports = ButtonGroup