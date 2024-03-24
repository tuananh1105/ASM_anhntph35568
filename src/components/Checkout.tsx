import Header from './header'
import Footer from './footer'
import Banner from './banner'

const Checkout = () => {
    return (
        <>
            <div className='bg-gray-100'>
                <Banner />
                <br />
                <div className="flex gap-8 justify-center mx-auto max-w-[1200px] ">
                    <div>
                        <div className="bg-white h-10 p-4 rounded-lg " style={{ width: "710px", height: "390px" }}>
                            <h1 className="font-bold text-xl ">Thông Tin Liên Hệ</h1>
                            <div className=" relative border h-14 mt-4  border-black-500 rounded-lg">
                                <input className="pt-4 font-semibold mt-3 ml-2" type="text" value="Nguyễn Tuấn Anh FPL" />
                                <span className="absolute text-gray-400 left-0 text-xs mt-1 ml-1 ">Tên người đi <span className="text-red-600 ">*</span></span>
                            </div>
                            <div className="flex gap-5">
                                <div className="border h-14 w-28 mt-4 border-black-500 rounded-lg">
                                    <p className="pt-4 font-semibold ml-6" >VN +84</p>
                                </div>
                                <div className="relative border h-14 mt-4 border-black-500 rounded-lg w-full">
                                    <input className="pt-4 font-semibold mt-3 ml-2 border-0" type="text" value="335039614" />
                                    <span className="absolute text-gray-400 left-0 text-xs mt-1 ml-1 ">Số Điện Thoai <span className="text-red-600 text-xs">*</span></span>
                                </div>
                            </div>
                            <div className=" relative border h-14 mt-4  border-black-500 rounded-lg">
                                <input className="pt-4 font-semibold mt-3 ml-2" type="text" value="anhntph35568@fpt.edu.vn" />
                                <span className="absolute text-gray-400 left-0 text-xs mt-1 ml-1">Email để nhận thông tin đặt chỗ <span className="text-red-600 ">*</span></span>
                            </div>
                            <div className="border h-14 mt-4  border-green-500 bg-green-50 rounded-lg flex gap-2">
                                <img src="/tichxanh.png" className="w-6 h-6 mt-4 ml-2" alt="" />
                                <p className="mt-4 ml-2 text-sm">Số điện thoại và email được sử dụng để thông tin đơn hàng và liên hệ khi cần thiết.</p>
                            </div>
                        </div>
                        <br />

                    </div>
                    <div>
                        <div className="bg-white p-4 rounded-lg flex gap-32" style={{ width: "366px", height: "70px" }}>
                            <h1 className="font-bold text-xl">Tạm Tính</h1>
                            <h1 className="flex gap-1 font-bold text-xl"> 230.000đ <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mt-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg></h1>
                        </div>

                        <br />
                        <div className="bg-white p-4 rounded-lg " style={{ width: "366px", height: "350px" }}>
                            <h1 className="font-bold text-xl">Thông tin chuyến đi</h1>
                            <img src="/image.png" alt="" />
                            <a className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-900 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500 mt-4 ml-28" href="#">
                                <span className="absolute -start-full transition-all group-hover:start-4">
                                    <svg className="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <span className="text-sm font-medium transition-all group-hover:ms-4"> Tiếp Tục </span>
                            </a>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Checkout