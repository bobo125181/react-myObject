import React from 'react'
import Imgchild from './lunboimg'
import Focus from './lunboFoucus'
require('./css/lunbo.css')
let lefts = require('./images/l.png')
let rights = require('./images/r.png')
class Lun extends React.Component {
    constructor () {
        super ();
        this.state = {
            status:0
        }
    }
    componentDidMount() {
  
    }
    btn (ind) {
        
    }
    render () {
        return (
            <div className='lun'>
           <Imgchild arr={this.props.arr} />
            <Focus />
            <div className='left' onClick={this.btn(-1)}>
            <img src={lefts} alt=''/>
            </div>
            <div className='right' onClick={this.btn(1)}>
           <img src={rights} alt=''/>
            </div>
            </div>
        )
    }
}
Lun.defaultProps = {
        arr: [{
                key:1,
                src: require('./images/1.jpg')
            },{
                key:2,
                src: require('./images/2.jpg')
            },{
                key:3,
                src: require('./images/3.jpg')
            },{
                key:4,
                src: require('./images/4.jpg')
            },{
                key:5,
                src: require('./images/5.jpg')
            },{
                key:6,
                src: require('./images/6.jpg')
            }]
}
export default {
    key:'lunbo',
    path: '/lunbo',
    component: Lun
}