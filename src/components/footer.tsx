
const Footer = () => {
    return (
        <div>
            <div className="flex justify-center bg-gray-100">
                <footer className="mt-16" >
                    <div className="py-12">
                        <div className="container w-full mx-auto space-y-10 ">
                            <div className="flex items-start justify-start">
                                <div className="routes mr-[95px]">
                                    <h2 className="font-semibold text-[22px] mb-[21px]">Tuyến đường</h2>
                                    <ul className="underline font-semibold text-[10px] space-y-5">
                                        <li><a href="">Xe đi Buôn Mê Thuột từ Sài Gòn</a></li>
                                        <li><a href="">Xe đi Vũng Tàu từ Sài Gòn</a></li>
                                        <li><a href=""> Xe đi Nha Trang từ Sài Gòn</a></li>
                                        <li><a href="">Xe đi Đà Lạt từ Sài Gòn</a></li>
                                        <li><a href="">Xe đi Sapa từ Hà Nội</a></li>
                                        <li><a href=""> Xe đi Hải Phòng từ Hà Nội</a></li>
                                        <li className="text-[13px]">
                                            <a href="">Xe đi Vinh từ Hà Nội</a>
                                        </li>
                                    </ul>
                                </div>
                                {/*  */}
                                <div className="limousine mr-[106px]">
                                    <h2 className="font-semibold text-[22px] mb-[21px]">
                                        Xe Limousine
                                    </h2>
                                    <ul className="underline font-semibold text-[10px] space-y-5">
                                        <li><a href="">Xe Limousine đi Đà Lạt từ Sài Gòn</a></li>
                                        <li><a href="">Xe Limousine đi Vũng Tàu từ Sài Gòn</a></li>
                                        <li><a href="">Xe Limousine đi Nha Trang từ Sài Gòn</a></li>
                                        <li><a href="">Xe Limousine đi Hải Phòng từ Hà Nội</a></li>
                                        <li><a href="">Xe Limousine đi Hạ Long từ Hà Nội</a></li>
                                        <li><a href="">Xe Limousine đi Sapa Từ Hà Nội</a></li>
                                        <li className="text-[13px]">
                                            <a href="">Xe Limousine đi Quảng Ninh từ Hà Nội</a>
                                        </li>
                                    </ul>
                                </div>
                                {/*  */}
                                <div className="news">
                                    <h2 className="font-semibold text-[22px] mb-[21px]">Tin tức</h2>
                                    <ul className="underline font-semibold text-[10px] space-y-5">
                                        <li>
                                            <a href=""> Xe giường nằm Limousine – đỉnh cao mới của</a>
                                        </li>
                                        <li>
                                            <a href="">Xe limousine đi Vũng Tàu: Tổng hợp top 6 xe</a>
                                        </li>
                                        <li>
                                            <a href="">Review xe limousine đi Đà Lạt: những câu hỏi</a>
                                        </li>
                                        <li className="text-[13px]">
                                            <a href="">Xe limousine đi Sapa: Tổng hợp top các hãng xe</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*  */}
                            <div className="flex items-start justify-start">
                                <div className="bus-station mr-28">
                                    <h2 className="font-semibold text-[22px] mb-[21px]">Bến xe</h2>
                                    <ul className="underline font-semibold text-[10px] space-y-5">
                                        <li><a href=""> Bến xe Miền Đông</a></li>
                                        <li><a href=""> Bến xe Trung tâm Đà Nẵng</a></li>
                                        <li><a href=""> Bến xe Gia Lâm</a></li>
                                        <li><a href=""> Bến xe Trung tâm Đà Nẵng</a></li>
                                        <li className="text-[13px]">
                                            <a href=""> Bến xe Miền Đông</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="garage">
                                    <h2 className="font-semibold text-[22px] mb-[21px]">Nhà xe</h2>
                                    <div className="garage-container flex items-center">
                                        <ul className="underline font-semibold text-[10px] space-y-5 mr-6">
                                            <li><a href="">Xe Liên Hưng</a></li>
                                            <li><a href="">Xe Long Vân Limousine</a></li>
                                            <li><a href="">Xe Vie Limousine</a></li>
                                            <li><a href="">Xe Cúc Tùng</a></li>
                                            <li><a href="">Xe An Phú Buslines</a></li>
                                            <li><a href="">Xe Bằng Phấn</a></li>
                                            <li><a href="">Xe Hà Lan</a></li>
                                            <li><a href="">Xe 36 Limousine</a></li>
                                        </ul>
                                        {/*  */}
                                        <ul className="underline font-semibold text-[10px] space-y-5 mr-2">
                                            <li><a href="">Xe Thuận Tiến</a></li>
                                            <li><a href="">Xe Khanh Phong</a></li>
                                            <li><a href="">Xe Tiến Oanh</a></li>
                                            <li><a href="">Xe Hạnh Cafe</a></li>
                                            <li><a href="">Xe Tân Kim Chi</a></li>
                                            <li><a href="">Xe Quang Nghị</a></li>
                                            <li><a href="">Xe Nam Cường Limousine</a></li>
                                            <li><a href="">Xe Phúc Xuyên</a></li>
                                        </ul>
                                        {/*  */}
                                        <ul className="underline font-semibold text-[10px] space-y-5 mr-[25px]">
                                            <li><a href="">Xe Điền Linh</a></li>
                                            <li><a href="">Xe Tuấn Hưng</a></li>
                                            <li><a href="">Xe Phong Phú</a></li>
                                            <li><a href="">Xe Trà Lan Viên</a></li>
                                            <li><a href="">Xe Nam Quỳnh Anh</a></li>
                                            <li><a href="">Xe G8 Open Tour</a></li>
                                            <li><a href="">Xe Hải Âu</a></li>
                                            <li><a href="">Xe Tràng An Limousine</a></li>
                                        </ul>
                                        {/*  */}
                                        <ul className="underline font-semibold text-[10px] space-y-5">
                                            <li><a href="">Xe Đồng Phước</a></li>
                                            <li><a href="">Xe Hảo</a></li>
                                            <li><a href="">Xe Hoa Mai</a></li>
                                            <li><a href="">Xe Minh Quốc</a></li>
                                            <li><a href="">Xe An Phú Quý</a></li>
                                            <li><a href="">Xe Xuân Tráng Limousine</a></li>
                                            <li><a href="">Xe Sao Việt</a></li>
                                            <li><a href="">Xe Sao Nghệ Limousine</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div className="flex items-start justify-start">
                                <div className="supports mr-[34px]">
                                    <h2 className="font-semibold text-[22px] mb-[21px]">Hỗ trợ</h2>
                                    <ul className="underline font-semibold text-[14px] space-y-5">
                                        <li><a href=""> Hướng dẫn thanh toán</a></li>
                                        <li><a href="">Quy chế Vexere.com</a></li>
                                        <li><a href="">Chính sách bảo mật thông tin</a></li>
                                        <li><a href="">Chính sách bảo mật thanh toán</a></li>
                                        <li><a href="">Chính sách và quy trình giải</a></li>
                                        <li><a href="">Câu hỏi thường gặp</a></li>
                                        <li>
                                            <a href="">Tra cứu đơn hàng</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="abouts mr-[93px]">
                                    <h2 className="font-semibold text-[22px] mb-[21px]">
                                        Về chúng tôi
                                    </h2>
                                    <ul className="underline font-semibold text-[14px] space-y-5">
                                        <li><a href="">Phần mềm đại lý</a></li>
                                        <li><a href="">Giới Thiệu Vexere.com</a></li>
                                        <li><a href="">Tuyển dụng</a></li>
                                        <li><a href="">Tin tức</a></li>
                                        <li><a href="">Liên hệ</a></li>
                                    </ul>
                                    <h2 className="font-semibold text-[22px] mt-[52px]">Chứng nhận</h2>
                                </div>
                                <div className="payments mr-[43px]">
                                    <h2 className="font-semibold text-[22px] mb-[21px]">
                                        Đối tác thanh toán
                                    </h2>
                                </div>
                                <div className="dow-app">
                                    <h2 className="font-semibold text-[22px] mb-[18px]">
                                        Tải ứng dụng Vexere
                                    </h2>
                                    <img src="./download_app_qr.png.png" alt="" className="size-[164px]" />
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
            </div>
            <div className="company py-6 text-center bg-white  ">
                <h2 className="text-lg font-semibold">
                    Công ty TNHH Thương Mại Dịch Vụ Vexere
                </h2>
                <p className="text-[7px] text-[#767676] font-regular my-3">
                    Địa chỉ đăng ký kinh doanh: 8C Chữ Đồng Tử, Phường 7, Quận Tân Bình,
                    Thành Phố Hồ Chí Minh, Việt Nam
                </p>
                <ul className="text-[#767676] text-[13px] mx-auto text-center">
                    <li>
                        <span>Địa chỉ:&nbsp;Lầu 2, tòa nhà H3 Circo Hoàng Diệu, 384 Hoàng Diệu,
                            Phường 6, Quận 4, Tp. Hồ Chí Minh, Việt Nam</span>
                    </li>
                    <li>
                        <span>Tầng 3, toà nhà 101 Láng Hạ, Đường 101 Láng Hạ, Phường Láng Hạ,
                            Quận Đống Đa, Hà Nội, Việt Nam</span>
                    </li>
                    <li>
                        <span>Giấy chứng nhận ĐKKD số 0315133726 do Sở KH và ĐT TP. Hồ Chí
                            Minh cấp lần đầu ngày 27/6/2018</span>
                    </li>
                    <li><span>Bản quyền © 2020 thuộc về Vexere.Com</span></li>
                </ul>
            </div>
        </div>

    )
}

export default Footer