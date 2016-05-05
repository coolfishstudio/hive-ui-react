import React, { Component } from 'react'
import { Link } from 'react-router'
import { View, Row, Col } from 'hive'

class Components extends Component {
    render () {
        return (
            <Row justify={'center'}>
                <Col span={22} className={'site-main-wrapper'}>
                    <Row>
                        <Col span={5} className={'site-aside-container'}>
                            <ul className={'site-aside-nav'}>
                                <li><Link to='/components/introduce'>介绍</Link></li>
                                <li><Link to='/components/layout'>布局</Link></li>
                                <li><Link to='/components/icon'>图标</Link></li>
                                <li><Link to='/components/button'>按钮</Link></li>
                            </ul>
                        </Col>
                        <Col span={19} className={'site-main-container'}>
                            { this.props.children }
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

module.exports = Components