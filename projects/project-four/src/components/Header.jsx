const Header = () => {
    return (
        <div className="w-[1091px] px-12 py-[39px] bg-white border-b border-slate-200 justify-end items-start gap-[116px] inline-flex">
            <div className="w-[572px] h-[39px] px-[25px] rounded-[20px] border border-neutral-300 justify-between items-center flex">
                <div className="w-[39px] h-4 text-zinc-500 text-base font-normal ">Хайх</div>
                <div className="w-5 h-5 justify-center items-center flex">
                    <div className="w-5 h-5 relative">
                    </div>
                </div>
            </div>
            <div></div>
            <div className="justify-end items-start gap-3.5 flex">
                <div className="px-[30px] py-2.5 bg-white rounded-[10px] border border-zinc-200 justify-center items-center gap-2.5 flex">
                    <a href="/register" className="text-amber-600 text-base font-semibold  leading-[21px]">Бүртгүүлэх</a>
                </div>
                <div className="px-[30px] py-2.5 bg-amber-600 rounded-[10px] justify-center items-center gap-2.5 flex">
                <a href="/login" className="text-white text-[15px] font-medium  leading-[21px]">Нэвтрэх</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
