import { Link } from "react-router-dom"
import car from "../assets/images/porshce.svg";
const Intro = () => {
    return (
        <div className="intro">
            <div className="container">
                <div className="intro_box">
                    <div className="intro_mini_box">
                        <h1 className="intro_title">PORSCHE</h1>
                        <button className="intro_btn"><Link to="/">MORE</Link></button>
                    </div>
                    <img src={car} className="intro_img" />
                </div>
            </div>
        </div>
    )
}

export default Intro
