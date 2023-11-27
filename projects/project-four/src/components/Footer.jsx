const Footer = () => {
    return (
        <div className="w-[1091px] h-[190px] px-[65px] py-[25px] bg-white border-t border-slate-200 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="justify-start items-start gap-[15px] inline-flex">
                <div className="w-[216.75px] flex-col justify-start items-start gap-[18px] inline-flex">
                    <div className="w-[83.34px] h-[52px] relative">
                        <div className="w-[82.64px] h-[42px] left-0 top-0 absolute">
                            <div className="w-[18.17px] h-[24.26px] left-0 top-[6.38px] absolute">
                            </div>
                            <div className="left-[19.64px] top-0 absolute"><span className="text-red-400 text-[27.25px] font-normal font-['Okta Neue']">i</span><span className="text-amber-500 text-[27.25px] font-normal font-['Okta Neue']">blog</span></div>
                        </div>
                        <div className="left-[0.71px] top-[36.33px] absolute text-gray-600 text-[9.97px] font-normal font-['Okta Neue']">Write, Read, Enjoy</div>
                    </div>
                </div>
                <div className="h-[83px] justify-center items-start gap-[60px] flex">
                    <div className="flex-col justify-start items-start gap-[18px] inline-flex">
                        <div className="text-gray-900 text-base font-semibold font-['Inter'] leading-[21px]">Тусламж</div>
                        <div className="flex-col justify-start items-start gap-1.5 flex">
                            <div className="text-zinc-700 text-sm font-medium font-['Inter'] leading-[18px]">Хэрэглэх заавар</div>
                            <div className="text-zinc-700 text-sm font-medium font-['Inter'] leading-[18px]">Санал хүсэлт</div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[18px] inline-flex">
                        <div className="text-gray-900 text-base font-semibold font-['Inter'] leading-[21px]">Бидэнтэй холбогдох</div>
                        <div className="flex-col justify-start items-start gap-2 flex">
                            <div className="justify-start items-center gap-0.5 inline-flex">
                                <div className="w-[15px] h-[15px] relative"></div>
                                <div><span className="text-gray-900 text-sm font-medium font-['Inter'] leading-[18px]"> </span><span className="text-zinc-700 text-sm font-medium font-['Inter'] leading-[18px]">info@jstemplate.net</span></div>
                            </div>
                            <div className="justify-start items-start gap-0.5 inline-flex">
                                <div className="w-[15px] h-[15px] relative"></div>
                                <div className="text-zinc-700 text-sm font-medium font-['Inter'] leading-[18px]">+976 99112344</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;