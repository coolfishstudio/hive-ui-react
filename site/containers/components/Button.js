import React, { Component } from 'react'
import { View, Button, Icon } from 'hive'

const styles = {}

class ButtonPanel extends Component {
    constructor (props) {
        super(props)
        this.state = {
            loadingBtn: false,
            loadingIcon: false,
            loadingRestore: false
        }
    }

    clickLoadingBtn () {
        this.setState({
            loadingBtn: true
        })
    }

    clickLoadingIcon () {
        this.setState({
            loadingIcon: true
        })
    }

    clickLoadingRestore () {
        this.setState({
            loadingRestore: true
        })
        setTimeout(() => {
            this.setState({
                loadingRestore: false
            })
        }, 3000);
    }

    render () {
        return (
            <View>
                <h1>Button 按钮</h1>
                <div>
                    <h3>按钮类型</h3>
                    <Button style={styles.siteBtn}>次按钮</Button>
                    <Button style={styles.siteBtn} type={'primary'}>主按钮</Button>
                    <Button style={styles.siteBtn} type={'ghost'}>幽灵按钮</Button>
                    <Button style={styles.siteBtn} type={'dashed'}>虚线按钮</Button>
                    <br />
                    <h3>按钮尺寸</h3>
                    <Button style={styles.siteBtn} size={'large'} type={'primary'}>大按钮</Button>
                    <Button style={styles.siteBtn} type={'primary'}>默认按钮</Button>
                    <Button style={styles.siteBtn} size={'small'} type={'primary'}>小按钮</Button>
                    <br />
                    <h3>按钮形状</h3>
                    <Button style={styles.siteBtn} shape={'circle'} size={'large'} type={'primary'}>圆</Button>
                    <Button style={styles.siteBtn} shape={'circle'} type={'primary'}>圆</Button>
                    <Button style={styles.siteBtn} shape={'circle'} size={'small'} type={'primary'}>圆</Button>
                    <br />
                    <h3>按钮不可用</h3>
                    <Button style={styles.siteBtn} disabled>次按钮(失效)</Button>
                    <Button style={styles.siteBtn} type={'primary'} disabled>主按钮(失效)</Button>
                    <Button style={styles.siteBtn} type={'ghost'} disabled>幽灵按钮(失效)</Button>
                    <Button style={styles.siteBtn} type={'dashed'} disabled>虚线按钮(失效)</Button>
                    <h3>图标元素</h3>
                    <Button style={styles.siteBtn} shape={'circle'} type={'primary'}><Icon type={'search'} /></Button>
                    <Button style={styles.siteBtn} type={'primary'}><Icon type={'search'} />icon对象</Button>
                    <Button style={styles.siteBtn} type={'primary'} icon={'search'}>icon属性</Button>
                    <h3>加载中</h3>
                    <Button style={styles.siteBtn} type={'primary'} loading>加载</Button>
                    <Button style={styles.siteBtn} type={'primary'} onPress={() => this.clickLoadingBtn()} loading={this.state.loadingBtn}>点击加载 文本</Button>
                    <Button style={styles.siteBtn} type={'primary'} icon={'poweroff'} onPress={() => this.clickLoadingIcon()} loading={this.state.loadingIcon}>点击加载 ICON</Button>
                    <Button style={styles.siteBtn} type={'primary'} icon={'poweroff'} onPress={() => this.clickLoadingRestore()} loading={this.state.loadingRestore}>3秒后 恢复</Button>
                    <h3>按钮组合</h3>
                    <p>基础组合</p>
                    <Button.Group style={styles.siteBtn}>
                        <Button type={'primary'}>1</Button>
                        <Button type={'primary'}>2</Button>
                        <Button type={'primary'}>3</Button>
                    </Button.Group>
                    <Button.Group style={styles.siteBtn}>
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                    </Button.Group>
                    <Button.Group style={styles.siteBtn}>
                        <Button type={'primary'}>1</Button>
                    </Button.Group>
                    <p>带图标按钮组合</p>
                    <Button.Group style={styles.siteBtn}>
                        <Button type={'primary'}><Icon type={'left'} />后退</Button>
                        <Button type={'primary'}>前进<Icon type={'right'} /></Button>
                    </Button.Group>
                    <p>多个组合</p>
                    <Button.Group style={styles.siteBtn}>
                        <Button type={'primary'}>1</Button>
                        <Button type={'ghost'}>2</Button>
                        <Button type={'dashed'}>3</Button>
                        <Button disabled>禁止</Button>
                        <Button type={'primary'} icon={'search'}>查询</Button>
                    </Button.Group>
                    <p>组合尺寸</p>
                    <Button.Group size={'large'} style={styles.siteBtn}>
                        <Button type={'primary'}>大</Button>
                        <Button type={'primary'}>大</Button>
                        <Button type={'primary'}>大</Button>
                    </Button.Group>
                    <Button.Group style={styles.siteBtn}>
                        <Button type={'primary'}>中</Button>
                        <Button type={'primary'}>中</Button>
                        <Button type={'primary'}>中</Button>
                    </Button.Group>
                    <Button.Group size={'small'} style={styles.siteBtn}>
                        <Button type={'primary'}>小</Button>
                        <Button type={'primary'}>小</Button>
                        <Button type={'primary'}>小</Button>
                    </Button.Group>
                    <p>波纹</p>
                    <Button type={'primary'} size={'large'} ripple>波纹效果</Button>
                </div>
            </View>
        )
    }
}

styles.siteBtn = {
    marginRight: 8,
    marginBottom: 12
}

module.exports = ButtonPanel