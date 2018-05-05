import React, {Component} from 'react'
import ReactSwipes from "react-swipes";
import "./swiper.scss";
class ShowImg extends Component{

    render() {
        const { itemImages, showImg } = this.props

        return (
            <div>
                <ul className="Slide__ItemImg flex ">
                    {
                        itemImages.map((item, index) => {
                            return (
                                <li key={index} onClick={showImg.bind(null, index)}>
                                    <img src={item} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default ShowImg