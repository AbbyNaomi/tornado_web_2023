import MainContent from "./MainContent";
import SideBar from "./SideBar";

const HomePage = () => {
    return(
        <div className="flex ">
            <SideBar />
            <MainContent />
        </div>
    )
}

export default HomePage;