import React, {Component} from 'react'
import View from '../view'
import classNames from 'classNames'

import './style/index.less'

class Row extends Component {
    render () {
        const { justify, align } = this.props
        /*
         * justify : start | center | end | space-between | space-around
         * align : top | middle | bottom
         */
        return <View className={
            classNames(
                'hive-row', 
                (this.props.justify && ('hive-row-justify-' + this.props.justify)), 
                (this.props.align && ('hive-row-align-' + this.props.align)),
                (this.props.className && this.props.className)
            )} 
            style={ this.props.style }>
            {this.props.children}
        </View>
    }
}

module.exports = Row