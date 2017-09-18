import React from 'react'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../../stores/action_type';
class User extends React.Component {
    ent () {
        console.log(this.refs.input1.value)
    }
    render () {
        return (
            <div className='userinfo'>
            <div className='user'><input type='text' ref='input1'/></div>
            <div className='pas'><input type='text' ref='input2'/></div>
            <div className='btn'><button onClick={this.ent.bind(this)}>登录</button></div>
            </div>
        )
    }
}
export default {
    key: 'user',
    path: '/user',
    component: User
}