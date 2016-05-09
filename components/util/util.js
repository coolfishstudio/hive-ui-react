var util = {
    //获取元素相对于整个页面的偏移
    getOffset: function (obj, offset) {
        if (!offset) {
            offset = {};
            offset.top = 0;
            offset.left = 0;
        }
        if (obj == document.body) {//当该节点为body节点时，结束递归
            return offset;
        }
        offset.top += obj.offsetTop;
        offset.left += obj.offsetLeft;
        return this.getOffset(obj.parentNode, offset);//向上累加offset里的值
    },
    //获取鼠标点击的位置
    getPointer: function (event) {
        return {
            x: (event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft)) || event.pageX,
            y: (event.clientY + (document.documentElement.scrollTop || document.body.scrollTop)) || event.pageY
        }
    }
}

module.exports = util;