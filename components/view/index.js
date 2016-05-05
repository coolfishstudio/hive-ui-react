import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classNames'

import './style/index.less'

class View extends Component {
    render () {
        return <div className={
            classNames(
                'hive-view', 
                (this.props.className && this.props.className)
            )}
            style={ this.props.style }>
            {this.props.children}
        </div>
    }
}

module.exports = View