import React from 'react'
var Hello = React.createClass({
    //默认值
    getDefaultProps: function(){
        return {
            name: 'pomy',
            git: 'dwqs'
        }
    },
    //默认state
    getInitialState: function() {
        return {
            liked:false
        }
    },
    //事件
    handleClick: function(event) {
        this.setState({liked: !this.state.liked})
        console.log(this.state.liked)
    },
    //该方法在首次渲染之前调用，也是再 render 方法调用之前修改 state 的最后一次机会
    componentWillMount: function() {
        console.log('componentWillMount')
    },
    //该方法不会在服务端被渲染的过程中调用,该方法被调用时，已经渲染出真实的 DOM
    componentDidMount: function() {
        console.log("compenentDidMount")
    },
    componentWillReceiveProps: function() {
        console.log("compenentWillReceiveProps")
    },
    shouldComponentUpdate: function() {
        console.log("shouldComponentUpdate")
        return true
    },
    render: function(){
        return (
            <div>
            Hello,{this.props.name},git username is {this.props.git} ID: {this.props.dataId}
            <button onClick={this.handleClick}>stateLike</button>
            </div>
        )
    }
});
export default Hello;


