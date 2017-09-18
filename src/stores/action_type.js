// 定义action的type类型
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const ADD_USER = 'ADD_USER';

// 定义其他的常量
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// 定义action的执行函数
export function addTodo (text) {
    return {
        type:'ADD_TODO',
        text:text
    }
}
export function toggleTodo (index) {
    return {
        type:'TOGGLE_TODO',
        index:index
    }
}
export function setVisibilityFilter (filter) {
    return {
        type:'SET_VISIBILITY_FILTER',
        filter:filter
    }
}
// 添加用户名
export function addUser (name) {
    return {
        type: 'ADD_USER',
        name: name
    }
}
