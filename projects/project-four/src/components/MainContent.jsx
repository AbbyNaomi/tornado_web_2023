import { blogs } from "../data/data";
import CategoryContainer from "./CategoryContainer";

const MainContent = () => {
    return (
        <div className="flex-col">
            <div className="w-[982px] flex-col justify-start items-start gap-4 inline-flex px-20 py-[60px]">
                {blogs.map(b => <CategoryContainer title={b.title} children={b.children} />)}
            </div>
            <div className="mt-[60px] mr-[76px] ml-[500px] w-[141px] h-12 px-5 py-3 rounded-[10px] border border-zinc-500 border-opacity-30 justify-center items-center gap-3 flex">
                <div className="text-zinc-500 text-base font-normal leading-normal">Цааш унших</div>
            </div>
        </div>
    );
}

export default MainContent;