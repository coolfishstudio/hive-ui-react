import React, { Component } from 'react'
import { View, Image } from 'hive'

class ImagePanel extends Component {
    render () {
        var image = 'http://7xqxfk.com1.z0.glb.clouddn.com/2016/02/18/1450248405383.png';
        return (
            <View>
                <h1>Image 图片</h1>
                <p>自适应宽度</p>
                <Image url={image} width={80} height={80} contentMode={ Image.AutoWidthWithHeight } style={{ borderRadius: '50%' }}/>
                <p>居中自适应</p>
                <Image url={image} width={80} height={80} contentMode={ Image.ScaleAspectFill }/>
                <p>拉伸</p>
                <Image url={image} width={80} height={80} contentMode={ Image.ScaleToFill }/>
            </View>
        )
    }
}

module.exports = ImagePanel