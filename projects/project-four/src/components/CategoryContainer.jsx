import BlogCard from "./BlogCard"

const CategoryContainer = ({ title, children }) => {
    return (
        <div>
            <div className="w-[982px] h-[47.33px] justify-between items-center flex">
                <div className="px-[18.20px] py-[10.92px] justify-center items-center gap-[9.10px] flex">
                    <div className="text-neutral-900 text-lg font-bold uppercase leading-normal">{title}</div>
                </div>
                <div className="w-[116.50px] h-[47.33px] rounded-[10.92px] justify-end items-center gap-[10.92px] flex">
                    <div className="text-center text-slate-600 text-base font-medium leading-7">Бүгд</div>
                    <div className="w-[21.84px] h-[21.84px] relative"><img src="angle.png" alt="a" /></div>
                </div>
            </div>
            <div className="flex gap-[22px]">
                {children.map(c => <BlogCard title={c.title} imgSrc={c.imgSrc} profileImg={c.profileImg} profileName={c.profileName} blogDate={c.blogDate} likeCount={c.likeCount} />)}
            </div>
        </div>
    )
}

export default CategoryContainer