import React, { Component } from 'react'
import { View } from 'hive'

class Layout extends Component {
    render () {
        console.log(this.props);
        return (
            <View>
                layout
            </View>
        )
    }
}

module.exports = Layout