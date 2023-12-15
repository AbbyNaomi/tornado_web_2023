import Footer from "./Footer"
import Header from "./Header"

const Profile = (profileImg,) => {
    return (
        <div>
            <Header />
            <div className="flex">
                <div className="mt-[50px] mx-[50px] ">
                    <div className="flex-col">
                        <div className="flex items-center gap-2.5">
                            <div>
                                <img className="w-[85px] h-[85px] rounded-full" src="bigProfile.png" />
                            </div>
                            <div className="text-zinc-800 text-2xl font-semibold">
                                Tracey Willson
                            </div>
                        </div>
                        <div className="w-[286px] mt-[20px] h-10 justify-start items-start gap-[30px] inline-flex">
                            <div className="h-10 flex-col justify-center items-center gap-2 inline-flex">
                                <div className="w-[18px] h-3.5 text-zinc-800 text-[15px] font-semibold ">1</div>
                                <div className="text-zinc-800 text-[15px] font-semibold ">Follows</div>
                            </div>
                            <div className="h-[50px] rotate-180 border border-slate-200"></div>
                            <div className="h-10 flex-col justify-center items-center gap-2 inline-flex">
                                <div className="w-[18px] h-3.5 text-zinc-800 text-[15px] font-semibold ">0</div>
                                <div className="text-zinc-800 text-[15px] font-semibold ">Followers</div>
                            </div>
                            <div className="h-[50px] rotate-180 border border-slate-200"></div>
                            <div className="h-10 flex-col justify-center items-center gap-2 inline-flex">
                                <div className="w-2.5 h-3.5 text-zinc-800 text-[15px] font-semibold ">0</div>
                                <div className="text-zinc-800 text-[15px] font-semibold ">Posts</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[294px] h-[41px] mt-[30px] px-[30px] py-2.5 rounded-[10px] border border-slate-200 justify-center items-center gap-0.5 inline-flex">
                        <div className="w-4 h-4 relative" />
                        <div className="text-slate-600 text-[15px] font-medium leading-[21px]">Профайл засах</div>
                    </div>
                </div>
                <div className="w-[951px] h-10 border-b mt-[50px] border-zinc-200 justify-start items-start gap-px inline-flex">
                    <div className="w-[130px] h-10 pr-5 py-2.5 border-b-2 border-amber-600 justify-between items-center flex">
                        <div className="px-[40px] text-center text-zinc-800 text-lg font-bold">Бүгд </div>
                    </div>
                </div>
            </div>

            <div className="w-[265px] h-[212px] mx-[600px] flex-col justify-center items-center gap-[25px] inline-flex">
                <img className="w-[145px] h-[145px]" src="note.png" />
                <div className="w-[265px] text-center text-slate-600 text-base font-medium leading-[21px]">Одоогоор бичвэр оруулаагүй байна!</div>
            </div>


            <Footer />
        </div>
    )
}

export default Profile
