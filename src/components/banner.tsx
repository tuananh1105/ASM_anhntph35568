import MenuBanner from "./banner/MenuBanner"
import Pod from "./banner/Pod"

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <div className="relative overflow-hidden" style={{ maxHeight: '480px' }}>
                    <img src="./banner-main-vi.jpg.png" alt="" className="w-full h-auto" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-6 sm:mb-8 lg:mb-10">
                            <a href="#">Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</a>
                        </h2>
                        <MenuBanner />
                    </div>
                </div>
                <Pod />
            </div>
        </div>

    )
}

export default Banner