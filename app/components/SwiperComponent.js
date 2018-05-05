import React, {Component} from 'react'
import ReactSwipes from "react-swipes";
import "./swiper.scss";
import ImgSlidePlay from './ImgSlidePlay.js'
import ShowImg from './ShowImg.js'

const requireContext = require.context("../images", true, /^\.\/.*\.png$/);
const images1 = requireContext.keys().map(requireContext);
let imgArray = [
    images1[0],
    images1[1],
    images1[2]
    // 'http://tupian.enterdesk.com/2013/lxy/07/27/6/1.jpg',
    // 'http://bizhi.zhuoku.com/wall/jie/20070409/huoying/113.jpg',
    // 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/tUcIQCbjFFjdgfr.jpg',
    // 'http://n.sinaimg.cn/games/transform/20160722/6sHg-fxuhukz0771063.jpg',
    // 'http://img4.imgtn.bdimg.com/it/u=1422978104,3773037432&fm=21&gp=0.jpg',
]
class SwiperComponent extends Component {
    constructor() {
        super()
        this.state = {
            isImgShow: false,
            imgIndex: 1
        }
    }

    componentDidMount() {
    }
    showImg(imgIndex = 0) {
        this.setState({
            isImgShow: !this.state.isImgShow,
            imgIndex: imgIndex + 1
        })
    }
    render() {
        const { images } = this.props
        return (
            <div className='Slide'>
                <ShowImg itemImages={imgArray} showImg={this.showImg.bind(this)} />
                {
                    this.state.isImgShow && <ImgSlidePlay itemImages={imgArray} showImg={this.showImg.bind(this)} imgIndex={this.state.imgIndex}/>
                }
            </div>
        )
    }
}


export default SwiperComponent
