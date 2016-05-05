import React, { Component } from 'react'
import { View } from 'hive'

import Header from './Header';
import Footer from './Footer';

class Container extends Component {
    render () {
        return (
            <View>
                <Header {...this.props} />
                { this.props.children }
                <Footer />
            </View>
        )
    }
}

module.exports = Container