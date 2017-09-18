import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, VisibilityFilters } from '../../stores/action_type';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
require('./css/style.css')
class Todoo extends React.Component {
    render() {
        // console.log(t/his.props)
        const { dispatch, visibleTodos } = this.props
        console.log(visibleTodos)
        return (
            <div>
                <AddTodo
                    onAddClick={text => dispatch(addTodo(text))} />
                <TodoList
                todos={visibleTodos}
                onTodoClick = { index => dispatch(toggleTodo(index)) }
                />
            </div>
        )
    }
}
Todoo.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}
function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}
// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}
export default {
    key: 'todo',
    path: '/todo',
    component: connect(select)(Todoo)
}
