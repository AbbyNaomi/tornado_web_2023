const BlogCard = ({title, imgSrc, profileImg, profileName, blogDate, likeCount}) => {
    return (
        <div className="w-[230px] h-[288.71px] p-2.5 bg-white rounded-lg shadow flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="flex-col justify-start items-start gap-[5px] flex">
                <img className="w-[210px] h-[140px] rounded-lg" src={imgSrc} />
                <div className="w-[140px] text-gray-900 text-base font-semibold leading-[18px]">{title}</div>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-[210px] justify-between items-center inline-flex">
                    <div className="w-[120px] h-[20.71px] justify-start items-center gap-1 flex">
                        <img className="w-[21px] h-[21px] rounded-2xl" src={profileImg} />
                        <div className="text-neutral-400 text-sm font-medium leading-[14px]">{profileName}</div>
                    </div>
                    <div className="text-neutral-400 text-xs font-normal leading-[10.98px]">{blogDate}</div>
                </div>
            </div>
            <div className="w-[209px] justify-between items-center inline-flex">
                <div className="justify-start items-center gap-1 flex">
                    <div className="w-5 h-5 relative"><img src="heart.png" alt="" /></div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="justify-start items-center gap-4 inline-flex">
                            <div className="text-neutral-900 text-base font-medium  leading-tight tracking-tight">{likeCount}</div>
                        </div>
                    </div>
                </div>
                <div className="p-[5px] bg-blue-500 rounded-[5px] justify-start items-center gap-1 flex">
                    <div className="w-4 h-4 relative"><img src="fb.png" alt="" /></div>
                    <div className="text-slate-50 text-[15px] font-medium leading-tight tracking-tight">Share</div>
                </div>
            </div>
        </div>
    )
}
export default BlogCard