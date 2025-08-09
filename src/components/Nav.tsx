import { Link } from "react-router";
import menu from "../assets/images/menu.svg";
import porsche from "../assets/images/porsche_logo.svg";
import profile from "../assets/images/profile.svg";
import location from "../assets/images/location.svg";

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav_box">
                <img src={menu} alt="" className="nav_box_menu" />
                <img src={porsche} alt="" className="nav_box_logo" />
                <div className="nav_mini_box">
                    <img src={profile} alt="" className="nav_profile_img"/>
                    <button className="nav_btn_box">
                        <Link to="/" className="nav_link">
                            <img src={location} alt="" className="nav_link_img" />
                            <p className="nav_link_text">Find Porsche Center</p>
                        </Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav
