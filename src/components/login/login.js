import React from 'react'
require('./css/login.css')
class Login extends React.Component {
    constructor () {
        super();
        this.state = {
            userval: '',
            pasval: '',
            userinfo: '请输入手机号',
            isClickable: true,
            codeval: '验证码',
            num: 0
        }
    }
    //修改状态值
    change1 (e) {
        this.setState({userval: e.target.value})
    }
    change2 (e) {
        this.setState({pasval: e.target.value})
    }
    //松开按键
    keyup1 () {
        this.setState({userinfo:''})
        if(this.state.userval.length==11) {
            this.setState({isClickable:false})
        } else {
            this.setState({isClickable:true})
        }
    }
    //失去焦点
    userfocus () {
        if(/^1[3586]\d{9}$/.test(this.state.userval)) {
            this.setState({isClickable:false,userinfo:'手机号正确'})
        } else {
            this.setState({isClickable:true,userinfo:'手机格式有误'})
        }

    }
    //点击验证码
    code () {
        let i=60
        let time=setInterval(()=>{
            i--
            this.setState({codeval: i + '秒重新发送',isClickable:true})
            if (i  == 0) {
                clearInterval(time)
                let math = Math.floor(Math.random()*10000)
                alert(math)
                this.setState({codeval:'验证码',isClickable:false,num:math})
            }
        },100)
    }
    //点击注册
    logins () {
        if (this.state.pasval == '') {
            alert('请先输入验证码')
            return false
        }
        this.state.num == this.state.pasval ? alert('注册成功') :  alert('输入有误')
        }
    render () {
        return (
            <div className='logins'>
            <div className="header"><span>《</span><span>会员状态</span><span></span></div>
            <div className='user'><input type='text' placeholder="请输入手机号" value={this.state.userval}
             onChange={this.change1.bind(this)} onBlur={this.userfocus.bind(this)}
             onKeyUp={this.keyup1.bind(this)}
             />
             <span className='verify'>{this.state.userinfo}</span></div>
            <div className='code'><input type='text' placeholder="请输入验证码" value={this.state.pasval}
             onChange={this.change2.bind(this)} />
             <button disabled={this.state.isClickable} className='btns' onClick={this.code.bind(this)}>{this.state.codeval}</button></div>
            <div className='loginbtn'><button disabled={this.state.isClickable} onClick={this.logins.bind(this)}>注册</button></div>
            </div>
        )
    }
}
export default {
    key:'Login',
    path:'/login',
    component: Login
}