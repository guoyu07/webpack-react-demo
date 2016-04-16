'use strict';
/**返回普通的HTML
module.exports = function () {
    var element = document.createElement('h1');
    element.innerHTML = 'Hello Siguoya';
    return element;
};
*/

/**
 * 返回React组件
 */
import './component.css';
var style={
    backgroundColor:'#EEE'
};
import './component.less';
import React from 'react';
export default class Hello extends React.Component {
    render() {
        return <h1 className="Hello World" style={style}>Hello World</h1>;
    }
}