import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import DangerHtml from './components/DangerHtml'
import SwiperComponent  from './components/SwiperComponent'

class App extends Component{
    render() {
        return (
            <div>
                <h1>React Blog</h1>
                <DangerHtml/>
                <SwiperComponent/>
            </div>
        )
    }
}
export default App
