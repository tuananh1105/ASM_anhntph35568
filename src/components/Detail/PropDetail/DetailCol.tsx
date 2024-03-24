import { Link } from 'react-router-dom'

const DetailCol = (props: { type: String }) => {
    return (
        <>
            <div className="bg-white p-4 rounded-lg mr-16 " style={{ width: "910px", height: "290px" }}>
                <div className="flex gap-60">
                    <div className="relative flex ">
                        <img src="/sp.png.png" className="h-auto pt-8 px-3" alt="Your image" />
                        <div className="absolute top-10 left-0 bg-green-500 py-1 px-4 text-white">
                            <span className="text-xs flex gap-4"> <img src="/Vector.png" alt="" /> Xác nhận tức thì</span>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg pt-7 text-[#484848]">{props.type}</h2>
                            <div className="pt-10 flex">
                                <img src="/SVG.png" alt="" />
                                <div className="">
                                    <div className="flex">
                                        <h1 className="px-3 font-semibold text-[#484848] text-2xl">19:00 </h1>
                                        <a href="#" className="text-gray-800  flex gap-2 pt-1 font-bold "> • <p className="font-semibold">Hà Nội</p></a>
                                    </div>
                                    <span className="pl-3 text-gray-400 ">1h30m</span>
                                    <div className="flex">
                                        <h1 className="px-3 font-semibold text-gray-500 text-2xl">20:30 </h1>
                                        <a href="#" className="text-gray-600 flex gap-2 pt-1 font-bold "> • <p className="font-semibold">Hải Phòng</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="font-semibold text-[#2474E5] text-2xl pt-8 ml-14 ">Từ 230.000đ</h1>
                        <br />
                        <img className="ml-auto" src="/price.png" alt="" />
                        <h2 className="pt-5 text-gray-600 ml-16">Còn 11 chỗ trống</h2>
                        <br />
                        <Link to="/checkout" className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-3 rounded ml-16 mt-3  ">
                            Chọn Chuyến
                        </Link>
                    </div>
                </div>
                <div className="flex justify-end">
                    <h1 className="font-semibold font-xl mt-5">KHÔNG CẦN THANH TOÁN TRƯỚC</h1>
                </div>
            </div>
            <br />
        </>
    )
}

export default DetailCol