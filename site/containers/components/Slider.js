import React, { Component } from 'react'
import { View, Slider } from 'hive'

class SliderPanel extends Component {
    render () {        
        return (
            <View>
                <h1>Slider 轮播图</h1>
                <Slider 
                    speed={1.5}
                    delay={3}
                    pause={true}
                    autoplay={true}
                    dots={true}
                    arrows={true}
                >
                    <View className={'site-demo-div'}><h3>1</h3></View>
                    <View className={'site-demo-div'}><h3>2</h3></View>
                    <View className={'site-demo-div'}><h3>3</h3></View>
                    <View className={'site-demo-div'}><h3>4</h3></View>
                </Slider>
            </View>
        )
    }
}

module.exports = SliderPanel