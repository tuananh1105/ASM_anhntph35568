import FilterDetail from "./FilterDetail"
import DetailLi from "./PropDetail/DetailLi"

const AsideDetail = () => {
    return (
        <>
            <div>
                <FilterDetail />
                <br />
                <div className="flex  flex-col justify-between border-e bg-white rounded-lg w-64 ml-20">
                    <div className="px-4 py-6">
                        <span className="grid h-10 w-32 font-bold text-xl text-gray-900">
                            Lọc
                        </span>
                        <ul className="mt-6 space-y-1">
                            <DetailLi type='Giờ Đi' />
                            <DetailLi type='Nhà Xe' />
                            <DetailLi type='Giá Vé' />
                            <DetailLi type='Điểm Đón' />
                            <DetailLi type='Điểm Trả' />
                            <DetailLi type='Tiêu Chí Phổ Biến' />
                            <DetailLi type='Vị Trí' />
                        </ul>
                    </div>
                    <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                        <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                            <img alt="" src="/avt.jpg" className="size-10 rounded-full object-cover" />
                            <div>
                                <p className="text-xs">
                                    <strong className="block font-medium">Nguyễn Tuấn Anh</strong>
                                    <span> anhntph35568@fpt.edu.vn </span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AsideDetail