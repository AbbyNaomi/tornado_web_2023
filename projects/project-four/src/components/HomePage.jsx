import MainContent from "./MainContent";
import SideBar from "./SideBar";
import Header from "./Header";

const HomePage = () => {
    return (
        <div className="flex ">
            <SideBar />
            <div className="flex-col">
                <Header />
                <MainContent />
            </div>
        </div>
    )
}

export default HomePage;