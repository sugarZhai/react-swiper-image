import React, {Component} from 'react'

class DangerHtml extends Component {
    constructor() {
        super()
        this.state = {
            content: '<h1>欢迎光临我的小店<span>+1</span></h1>'
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.content}}/>
        )
    }
}

export default DangerHtml