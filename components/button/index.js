import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classNames'
import Icon from '../icon'
import './style/index.less'

import ButtonGroup from './buttonGroup'

class Button extends Component {
    /*
     * type: 类型 default｜primary｜ghost｜dashed
     * shape: 形状 default｜circle
     * size: 大小 large｜default|small
     * disabled: 不可用 true|null
     * loading: 加载中 true|null
     * onPress: 点击事件
     */
    static propTypes = {
        type: React.PropTypes.oneOf(['default', 'primary', 'ghost', 'dashed']),
        shape: React.PropTypes.oneOf(['default', 'circle']),
        size: React.PropTypes.oneOf(['large', 'default', 'small']),
        htmlType: React.PropTypes.oneOf(['submit', 'button', 'reset']),
        loading: React.PropTypes.bool,
        icon: React.PropTypes.string,
        onPress: React.PropTypes.func,
    }

    render () {
        const sizeCls = { 'large': 'lg', 'small': 'sm'}
        const { type='default', shape='default', size='default', htmlType='button', loading, icon, onPress=null } = this.props
        const iconType = loading ? 'loading' : icon

        let childrenObj = this.props.children

        if (typeof this.props.children === 'string')
            childrenObj = <span>{ this.props.children }</span>
        if (toString.apply(this.props.children) === '[object Array]') {
            childrenObj = this.props.children.map((item, i) => {
                if (typeof item === 'string')
                    return <span key={i}>{ item }</span>
                if (!loading)
                    return item
            })
        }

        return <button {...this.props}
            ref={'button'}
            type={ htmlType }
            className={
                classNames(
                    'hive-btn', 
                    (type && type !== 'default' && 'hive-btn-' + type),
                    (shape && shape !== 'default' && 'hive-btn-' + shape),
                    (size && size !== 'default' && 'hive-btn-' + sizeCls[size]),
                    (loading && 'hive-btn-loading'),
                    (this.props.className && this.props.className)
                )}
            onClick={ onPress }
            style={ this.props.style }>
            { iconType ? <Icon type={iconType} /> : null }{ childrenObj }
        </button>
    }
}

Button.Group = ButtonGroup;
module.exports = Button