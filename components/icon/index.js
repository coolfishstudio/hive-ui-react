import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classNames'

import './style/index.less'

class Icon extends Component {
    render () {
        const { type } = this.props
        return <i className={
            classNames(
                'hive-icon',
                'hive-icon-' + type,
                (this.props.className && this.props.className)
            )} {...this.props}></i>
    }
}

module.exports = Icon