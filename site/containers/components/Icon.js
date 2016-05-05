import React, { Component } from 'react'
import { View, Icon } from 'hive'

class IconPanel extends Component {
    render () {
        return (
            <View>
                icon
                <Icon type={'rollback'} />
            </View>
        )
    }
}

module.exports = IconPanel