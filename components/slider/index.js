import React, {Component} from 'react'
import View from '../view';

class Slider extends Component {
    render () {
        console.log(this.props.children)

        let _count = this.props.children.length;
        let _width = 100 / _count + '%';
        

        return (<View>
            {this.props.children}
        </View>)
    }
}


/*

speed={1.5}       #轮播切换图片的速度
delay={3}         #自动轮播时候停留的时间
pause={true}      #鼠标放上图片是否停止自动轮播
autoplay={true}   #是否自动轮播
dots={true}       #是否需要下面的轮播点点位
arrows={true}     #是否需要左右点击箭头

 */

module.exports = Slider;