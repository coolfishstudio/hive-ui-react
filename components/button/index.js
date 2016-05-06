import React, {Component} from 'react'
import classNames from 'classNames'

import './style/index.less'

class Button extends Component {
    /*
     * type: 类型 default｜primary｜ghost｜dashed
     * shape: 形状 default｜circle
     * size: 大小 large｜default|small
     * disabled: 不可用 true|null
     */
    static propTypes = {
        type: React.PropTypes.oneOf(['default', 'primary', 'ghost', 'dashed']),
        shape: React.PropTypes.oneOf(['default', 'circle']),
        size: React.PropTypes.oneOf(['large', 'default', 'small']),
        htmlType: React.PropTypes.oneOf(['submit', 'button', 'reset'])
    }
    render () {
        const sizeCls = { 'large': 'lg', 'small': 'sm'}
        const { type='default', shape='default', size='default', htmlType='button' } = this.props;

        return <button {...this.props}
            type={ htmlType }
            className={
                classNames(
                    (this.props.className && this.props.className),
                    'hive-btn', 
                    (type && type !== 'default' && 'hive-btn-' + type),
                    (shape && shape !== 'default' && 'hive-btn-' + shape),
                    (size && size !== 'default' && 'hive-btn-' + sizeCls[size])
                )}
            style={ this.props.style }>
            <span>{this.props.children}</span>
        </button>
    }
}

module.exports = Button