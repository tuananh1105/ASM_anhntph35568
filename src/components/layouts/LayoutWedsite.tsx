import Header from '../header'
import Footer from '../footer'
import { Outlet } from 'react-router-dom'

const LayoutWedsite = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default LayoutWedsite