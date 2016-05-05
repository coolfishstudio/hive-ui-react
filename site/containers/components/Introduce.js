import React, { Component } from 'react'
import { View } from 'hive'

class IntroducePanel extends Component {
    render () {
        return (
            <View>
                <h1>介绍</h1>
                <p>根据所开发过的几个项目，结合ant的设计，对react进行一个简单的ui库的封装</p>
            </View>
        )
    }
}

module.exports = IntroducePanel