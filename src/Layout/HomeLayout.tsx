import { Outlet } from "react-router"
import Nav from "../components/Nav"

const HomeLayout = () => {
    return (
        <>
            <Nav />
            <Outlet/>
        </>
    )
}

export default HomeLayout
