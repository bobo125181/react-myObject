import React from 'react'
import {Slider} from 'amazeui-react'
class Lun extends React.Component {
    render() {
        return (
        <Slider>
            <Slider.Item>
                <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>
            </Slider.Item>
            <Slider.Item>
                <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg"/>
            </Slider.Item>
            <Slider.Item>
                <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg"/>
            </Slider.Item>
            <Slider.Item>
                <img src="http://s.amazeui.org/media/i/demos/bing-4.jpg"/>
            </Slider.Item>
        </Slider>
      )
    }
}
export default {
    key:'Lun',
    path:'/lun',
    component:Lun
}