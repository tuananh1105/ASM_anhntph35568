import DetailLabel from "./PropDetail/DetailLabel"

const FilterDetail = () => {
    return (
        <>
            <div className="bg-white p-4 rounded-lg ml-20 " style={{ width: "266px", height: "290px" }}>
                <h1 className="font-bold pb-2 ">Sắp Xếp</h1>
                <DetailLabel type='Mặc Định' />
                <DetailLabel type='Giờ Đi Sớm Nhất' />
                <DetailLabel type='Giờ Đi Muộn Nhất' />
                <DetailLabel type='Đánh Giá Cao Nhất' />
                <DetailLabel type='Giá Tăng Dần' />
                <DetailLabel type='Giá Giảm Dần' />
            </div>
        </>
    )
}

export default FilterDetail