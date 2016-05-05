import React, { Component } from 'react'
import { View, Row, Col } from 'hive'

class Practice extends Component {
    render () {
        return (
            <Row justify={'center'}>
                <Col span={22} className={'site-main-wrapper'}>
                    <View>
                        Practice
                    </View>
                </Col>
            </Row>
        )
    }
}

module.exports = Practice