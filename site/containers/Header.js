import React, { Component } from 'react'
import { Link } from 'react-router'
import { View, Row, Col } from 'hive'

class Header extends Component {
    render () {
        return (
            <Row justify={'end'} className={'site-header'}>
                <Col span={2}><Link to='/home'>首页</Link></Col>
                <Col span={2}><Link to='/practice'>实践</Link></Col>
                <Col span={2}><Link to='/components/layout'>组件</Link></Col>
            </Row>
        )
    }
}

module.exports = Header