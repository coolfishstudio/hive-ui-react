import React, { Component } from 'react'
import { View, Line } from 'hive'

class LinePanel extends Component {
    render () {        
        return (
            <View>
                <h1>Line 线条</h1>
                <p>上</p>
                <View style={{ padding: 10 }}>
                    线条
                    <Line.Top color={'#690'}/>
                </View>
                <p>下</p>
                <View style={{ padding: 10 }}>
                    线条
                    <Line.Bottom />
                </View>
                <p>左</p>
                <View style={{ padding: 10 }}>
                    线条
                    <Line.Left color={'#f90'}/>
                </View>
                <p>右</p>
                <View style={{ padding: 10 }}>
                    线条
                    <Line.Right color={'#8d0'}/>
                </View>
            </View>
        )
    }
}

module.exports = LinePanel