import MainContent from "./MainContent";
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="flex">
            <SideBar />
            <div className="flex-col">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;