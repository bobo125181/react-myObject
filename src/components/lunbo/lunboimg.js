import React from 'react'
class imgs extends React.Component{
    constructor() {
        super();
        this.state={
            i:0
        }
    }
    componentDidMount() {
       this.auto()
    }
    auto () {
        let id =this.state.i
        let that = this
        function autos () {
             id++
            if(id==6) {
                id = 0
            }
            that.setState({
                i:id
            })
        }
        let time = setInterval(autos,1000)
    }
    render() {
        const items = this.props.arr.map((obj)=>{
            return <li key={obj.key}><img src={obj.src}/></li>
        })
        return (
            <div className='imgs'>
            <ul style={{marginLeft:-this.state.i * 300}}>{items}</ul>
            </div>
        )
    }
}
export default imgs