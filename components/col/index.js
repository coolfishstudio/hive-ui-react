import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import View from '../view/index'
import classNames from 'classNames'

import './style/index.less'

class Col extends Component {
    render () {
        const { span, offset, order } = this.props
        /*
         * span : 1-24 栅格
         * offset : 列偏移
         * order: 排序
         */
        return <View className={
            classNames(
                'hive-col', 
                (order && 'hive-col-order-' + order),
                (span && 'hive-col-' + span),
                (offset && 'hive-col-offset-' + offset),
                (this.props.className && this.props.className)
            )}
            style={ this.props.style }>
            {this.props.children}
        </View>
    }
}

module.exports = Col