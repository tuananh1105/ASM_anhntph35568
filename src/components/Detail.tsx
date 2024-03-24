import BannerDetail from './banner/BannerDetail'
import AsideDetail from './Detail/AsideDetail'
import ColStyteDetail from './Detail/ColStyteDetail'

const Detail = () => {
    return (
        <>
            <div className='bg-gray-100'>
                <br />
                <BannerDetail />
                <br />
                <div className="flex flex-col sm:flex-row sm:gap-0 sm:grid sm:grid-flow-col justify-between">
                    <AsideDetail />
                    <ColStyteDetail />
                </div>

            </div>
        </>
    )
}

export default Detail