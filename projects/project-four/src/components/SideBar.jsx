const SideBar = () => {
    return (
        <div className="w-[348px] h-[1802px] px-[49px] py-10 border-2 border-slate-200 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="flex">
                <img src="Group.png" alt="1" />
                <div><span className="text-red-400 text-3xl font-normal font-['Okta Neue']">i</span><span className="text-amber-500 text-3xl font-normal font-['Okta Neue']">blog</span></div>
            </div>
            <div className="w-[250px] h-[442px] flex-col justify-start items-start gap-9 inline-flex">
                <div className="h-[442px] flex-col justify-start items-start gap-8 flex">
                    <div className="flex-col justify-center items-start gap-3 flex">
                        <div className="w-[250px] justify-between items-center inline-flex">
                            <div className=" text-opacity-20 text-sm font-semibold ">Lifestyle</div>
                            <div className="w-3 h-3 relative origin-top-left -rotate-180"></div>
                        </div>
                        <div className="flex-col justify-center items-start gap-2 flex">
                            <div className="w-[250px] px-4 py-2 bg-white rounded justify-start items-start inline-flex">
                                <div className="text-opacity-20 text-sm font-normal leading-[21px]">Hobby</div>
                            </div>
                            <div className="w-[250px] px-4 py-2 bg-white rounded justify-start items-start inline-flex">
                                <div class=" text-opacity-20 text-sm font-normal leading-[21px]">Travel</div>
                            </div>
                            <div className="w-[250px] px-4 py-2 bg-white rounded justify-start items-start inline-flex">
                                <div className=" text-opacity-20 text-sm font-normal  leading-[21px]">Food&Beverage</div>
                            </div>
                            <div className="w-[250px] px-4 py-2 bg-white rounded justify-start items-start inline-flex">
                                <div className="text-opacity-20 text-sm font-normal ] leading-[21px]">Home and decor</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-center items-start gap-3 flex">
                        <div className="w-[250px] justify-between items-center inline-flex">
                            <div className="text-opacity-20 text-sm font-semibold ">Sport</div>
                            <div className="w-3 h-3 relative origin-top-left -rotate-180"></div>
                        </div>
                        <div className="flex-col justify-center items-start gap-2 flex">
                            <div className="w-[250px] px-4 py-2 bg-white rounded justify-start items-start inline-flex">
                                <div className="text-opacity-20 text-sm font-normal  leading-[21px]">Soccer</div>
                            </div>
                            <div className="w-[250px] px-4 py-2 bg-white rounded justify-start items-start inline-flex">
                                <div className="text-opacity-20 text-sm font-normal leading-[21px]">Volleyball</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-center items-start gap-3 flex">
                        <div className="w-[250px] justify-between items-center inline-flex">
                            <div className="ext-opacity-20 text-sm font-semibold ">Technology</div>
                            <div className="w-3 h-3 relative"></div>
                        </div>
                    </div>
                    <div className="flex-col justify-center items-start gap-3 flex">
                        <div className="w-[250px] justify-between items-center inline-flex">
                            <div className="text-opacity-20 text-sm font-semibold ">Entertainment</div>
                            <div className="w-3 h-3 relative"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;