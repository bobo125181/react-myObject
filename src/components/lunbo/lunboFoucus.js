import React from 'react'
var focus = React.createClass({
    getDefaultProps () {
        return {
            status:0
        }
    },
    render() {
        return (
            <div className='focus'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
        )
    }
})
export default focus