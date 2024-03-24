import Header from './header'
import Footer from './footer'
import BannerDetail from './banner/BannerDetail'
import AsideDetail from './Detail/AsideDetail'
import ColStyteDetail from './Detail/ColStyteDetail'

const Detail = () => {
    return (
        <>
            <div className='bg-gray-100'>
                <Header />
                <br />
                <BannerDetail />
                <br />
                <div className="flex  gap-8 justify-start mx-auto max-w-[1200px] ">
                    <AsideDetail />
                    <ColStyteDetail />
                </div >
                <Footer />
            </div>
        </>
    )
}

export default Detail