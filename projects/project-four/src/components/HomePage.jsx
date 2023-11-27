import MainContent from "./MainContent";
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";

const HomePage = () => {
    return (
        <div className="flex ">
            <SideBar />
            <div className="flex-col">
                <Header />
                <MainContent />
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;