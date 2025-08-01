import { Outlet } from "react-router"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

const HomeLayout = () => {
    return (
        <>
            <Nav />
            <Outlet/>
            <Footer/>
        </>
    )
}

export default HomeLayout
