import React, { Component, PropTypes } from 'react'
class AddTodo extends Component {
    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }
    render() {
        return (
            <div>
            <input type="text" ref='input'/>
            <button onClick={(e) => this.handleClick(e)}>
             Add
            </button>
            </div>
        )
    }
}
AddTodo.defaultProps = {
        onAddClick: function() {}
    }

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
export default AddTodo
