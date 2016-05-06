import React, { Component } from 'react'
import { View, Row, Col } from 'hive'

class LayoutPanel extends Component {
    render () {
        return (
            <View>
                <h1>Layout 布局</h1>
                <p>24 栅格系统。</p>
                <h2>Flex布局</h2>
                <p>
                    我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。Flex 布局是基于 24 栅格来定义每一个“盒子”的宽度，但排版则不拘泥于栅格。
                </p>
                <h2>代码演示</h2>
                <h3>基础布局</h3>
                <Row>
                    <Col span={12}><View className={'site-demo-div'}>col-12</View></Col>
                    <Col span={12}><View className={'site-demo-div'}>col-12</View></Col>
                </Row>
                <Row>
                    <Col span={8}><View className={'site-demo-div'}>col-8</View></Col>
                    <Col span={8}><View className={'site-demo-div'}>col-8</View></Col>
                    <Col span={8}><View className={'site-demo-div'}>col-8</View></Col>
                </Row>
                <Row>
                    <Col span={6}><View className={'site-demo-div'}>col-6</View></Col>
                    <Col span={6}><View className={'site-demo-div'}>col-6</View></Col>
                    <Col span={6}><View className={'site-demo-div'}>col-6</View></Col>
                    <Col span={6}><View className={'site-demo-div'}>col-6</View></Col>
                </Row>
                <Row>
                    <Col span={1}><View className={'site-demo-div'}>col-1</View></Col>
                    <Col span={2}><View className={'site-demo-div'}>col-2</View></Col>
                    <Col span={3}><View className={'site-demo-div'}>col-3</View></Col>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                    <Col span={5}><View className={'site-demo-div'}>col-5</View></Col>
                    <Col span={9}><View className={'site-demo-div'}>col-9</View></Col>
                </Row>
                <h3>列偏移</h3>
                <Row>
                    <Col span={8}><View className={'site-demo-div'}>col-8</View></Col>
                    <Col span={8} offset={8}><View className={'site-demo-div'}>col-8 offset-8</View></Col>
                </Row>
                <Row>
                    <Col span={6} offset={6}><View className={'site-demo-div'}>col-6 offset-6</View></Col>
                    <Col span={6} offset={6}><View className={'site-demo-div'}>col-6 offset-6</View></Col>
                </Row>
                <Row>
                    <Col span={12} offset={6}><View className={'site-demo-div'}>col-12 offset-6</View></Col>
                </Row>
                <h3>FLEX布局</h3>
                <p>子元素居左排列</p>
                <Row justify={'start'}>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                </Row>
                <p>子元素居中排列</p>
                <Row justify={'center'}>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                </Row>
                <p>子元素居右排列</p>
                <Row justify={'end'}>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                </Row>
                <p>子元素等宽排列</p>
                <Row justify={'space-between'}>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                </Row>
                <p>子元素分散对齐</p>
                <Row justify={'space-around'}>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'}>col-4</View></Col>
                </Row>
                <h3>FLEX对齐</h3>
                <p>顶部对齐</p>
                <Row justify={'space-between'} align={'top'}>
                    <Col span={4}><View className={'site-demo-div'} style={{ height: 100 }}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'} style={{ height: 50 }}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'} style={{ height: 120 }}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'} style={{ height: 80 }}>col-4</View></Col>
                </Row>
                <p>居中对齐</p>
                <Row justify={'space-between'} align={'middle'}>
                    <Col span={4}><View className={'site-demo-div'} style={{ height: 100 }}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'} style={{ height: 50 }}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'} style={{ height: 120 }}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'} style={{ height: 80 }}>col-4</View></Col>
                </Row>
                <p>底部对齐</p>
                <Row justify={'space-between'} align={'bottom'}>
                    <Col span={4}><View className={'site-demo-div'} style={{ height: 100 }}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'} style={{ height: 50 }}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'} style={{ height: 120 }}>col-4</View></Col>
                    <Col span={4}><View className={'site-demo-div'} style={{ height: 80 }}>col-4</View></Col>
                </Row>
                <h3>FLEX排序</h3>
                <Row>
                    <Col span={6} order={4}><View className={'site-demo-div'}>1 col-6 order-4</View></Col>
                    <Col span={6} order={3}><View className={'site-demo-div'}>2 col-6 order-3</View></Col>
                    <Col span={6} order={2}><View className={'site-demo-div'}>3 col-6 order-2</View></Col>
                    <Col span={6} order={1}><View className={'site-demo-div'}>4 col-6 order-1</View></Col>
                </Row>
            </View>
        )
    }
}

module.exports = LayoutPanel