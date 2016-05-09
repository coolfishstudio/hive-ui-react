import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classNames'
import View from '../view'

class Image extends Component {
    /*
     */
    constructor (props) {
        super(props)
        this.state = {
            width: 0,
            height: 0,
            left: 0,
            top: 0
        };
    }

    static AutoWidthWithHeight = 'AutoWidthWithHeight';//自适应宽度
    static ScaleAspectFill = 'ScaleAspectFill';//居中自适应
    static ScaleToFill = 'ScaleToFill';//拉伸

    static defaultProps = {
        width: undefined,
        height: undefined,
        onPress: null,
        contentMode: 'ScaleAspectFill',
        onError: (err) => {console.error(err)},
        onLoad: () => {}
    }

    componentWillUnmount () {
        this.img.onload = null;
        this.img.onerror = null;
    }

    componentDidMount () {
        var props = this.props;
    
        var containerDom = ReactDOM.findDOMNode(this.refs.container),
            parentDom = containerDom.parentElement;

        var img = this.img = new window.Image();
        img.onerror = (err) => {
            this.props.onError();
        }

        img.onload = () => {
            var cw = this.props.width || containerDom.clientWidth,
                ch = this.props.height || containerDom.clientHeight;

            var pw = parentDom.clientWidth,
                ph = parentDom.clientHeight;

            var width = 0, height = 0, left = 0, top = 0;

            var iw = img.width,
                ih = img.height;
            var wv = iw / cw,
                hv = ih / ch;
            switch (this.props.contentMode) {
                //自适应宽度
                case Image.AutoWidthWithHeight:
                    top = 0;
                    height = ch;
                    left = (iw / hv - cw) * -0.5;
                    width = iw / hv;
                    break;
                //居中自适应
                case Image.ScaleAspectFill:
                    if(wv >= hv){
                        top = 0;
                        height = ch;
                        left = (iw / hv - cw) * -0.5;
                        width = iw / hv;
                    }else{
                        left = 0;
                        width = cw;
                        top = (ih / wv - ch) * -0.5;
                        height = ih / wv;
                    }
                    break;
                //拉伸
                case Image.ScaleToFill:
                    width = cw;
                    height = ch;
                    top = 0;
                    left = 0;
                    break;
                
            }
            this.setState({
                width: width,
                height: height,
                left: left,
                top: top
            });
            if (this.refs.image) this.refs.image.src = img.src;
            this.props.onLoad();
        };

        var src = this.props.url || (this.props.data && this.props.data[this.props.type])

        if (src) img.src = src;

    }

    componentWillReceiveProps (props) {
        if(this.props.url !== props.url) this.img.src = props.url;
    }

    render () {
        var cw = this.props.width,
            ch = this.props.height;
        return <View ref='container' 
            style={{
                overflow: 'hidden',
                width: cw,
                height: ch,
                borderRadius: (this.props.style && this.props.style.borderRadius) ? this.props.style.borderRadius : 0
            }} className={this.props.className}>
            <img style={{
                display: 'block',
                width: this.state.width,
                height: this.state.height,
                marginTop: this.state.top,
                marginBottom: this.state.top,
                marginLeft: this.state.left,
                marginRight: this.state.left
            }}
            ref='image'/>
        </View>
    }
}

module.exports = Image