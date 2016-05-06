import React, { Component } from 'react'
import { View, Button } from 'hive'

const styles = {}

class ButtonPanel extends Component {
    render () {
        return (
            <View>
                <Button style={styles.siteBtn}>次按钮</Button>
                <Button style={styles.siteBtn} type={'primary'}>主按钮</Button>
                <Button style={styles.siteBtn} type={'ghost'}>幽灵按钮</Button>
                <Button style={styles.siteBtn} type={'dashed'}>虚线按钮</Button>
                <br />
                <Button style={styles.siteBtn} size={'large'} type={'primary'}>大按钮</Button>
                <Button style={styles.siteBtn} type={'primary'}>默认按钮</Button>
                <Button style={styles.siteBtn} size={'small'} type={'primary'}>小按钮</Button>
                <br />
                <Button style={styles.siteBtn} shape={'circle'} size={'large'} type={'primary'}>圆</Button>
                <Button style={styles.siteBtn} shape={'circle'} type={'primary'}>圆</Button>
                <Button style={styles.siteBtn} shape={'circle'} size={'small'} type={'primary'}>圆</Button>
                <br />
                <Button style={styles.siteBtn} disabled>次按钮(失效)</Button>
                <Button style={styles.siteBtn} type={'primary'} disabled>主按钮(失效)</Button>
                <Button style={styles.siteBtn} type={'ghost'} disabled>幽灵按钮(失效)</Button>
                <Button style={styles.siteBtn} type={'dashed'} disabled>虚线按钮(失效)</Button>
            </View>
        )
    }
}

styles.siteBtn = {
    marginRight: 8,
    marginBottom: 12
}

module.exports = ButtonPanel