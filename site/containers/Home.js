import React, { Component } from 'react'
import { View, Row, Col } from 'hive'

class Home extends Component {
    render () {
        return (
            <Row justify={'center'}>
                <Col span={22} className={'site-main-wrapper'}>
                    <View>
                        Home
                    </View>
                </Col>
            </Row>
        )
    }
}

module.exports = Home