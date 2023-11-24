const Header = () => {
    return (
        <div class="w-[1091px] h-[119px] px-12 py-[39px] bg-white border-b border-slate-200 justify-end items-start gap-[116px] inline-flex">
            <div class="w-[572px] h-[39px] px-[25px] rounded-[20px] border border-neutral-300 justify-between items-center flex">
                <div class="w-[39px] h-4 text-zinc-500 text-base font-normal font-['Inter']">Хайх</div>
                <div class="w-5 h-5 justify-center items-center flex">
                    <div class="w-5 h-5 relative">
                    </div>
                </div>
            </div>
            <div></div>
            <div class="justify-end items-start gap-3.5 flex">
                <div class="px-[30px] py-2.5 bg-white rounded-[10px] border border-zinc-200 justify-center items-center gap-2.5 flex">
                    <div class="text-amber-600 text-base font-semibold font-['Inter'] leading-[21px]">Бүртгүүлэх</div>
                </div>
                <div class="px-[30px] py-2.5 bg-amber-600 rounded-[10px] justify-center items-center gap-2.5 flex">
                    <div class="text-white text-[15px] font-medium font-['Inter'] leading-[21px]">Нэвтрэх</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
