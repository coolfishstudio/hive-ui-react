import React, { Component } from 'react'
import { View } from 'hive'

class LayoutPanel extends Component {
    render () {
        return (
            <View>
                <h1>Layout 布局</h1>
                <p>24 栅格系统。</p>
                <h2>Flex 布局</h2>
                <p>
                    我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。Flex 布局是基于 24 栅格来定义每一个“盒子”的宽度，但排版则不拘泥于栅格。
                </p>
                <h2>代码演示</h2>
            </View>
        )
    }
}

module.exports = LayoutPanel