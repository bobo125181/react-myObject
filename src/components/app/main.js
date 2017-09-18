import React from 'react'
import Child from './index'
class Main extends React.Component {
    constructor () {
        super ();
        this.state = {
            name: '战三'
        } 
    }
    updateProp () {
        this.setState({
            name: '李四'
        })
    }
    render () {
        return (
            <div className="main">
            this is main component
            <Child name={this.state.name} />
            <button onClick={this.updateProp.bind(this)}>
            update props
            </button>
            </div>
        )
    }
};
Main.defaultProps = {
        name: '张三'
}
export default Main;