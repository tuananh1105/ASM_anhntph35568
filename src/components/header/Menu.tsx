import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div>
            <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                    <li className="px-3 text-white"><Link to="/">Quản lý đơn hàng</Link></li>
                    <li className="px-3 text-white"><a>Mở bán vé trên Vexere</a></li>
                    <li className="px-3 text-white"><a>Trở thành đối tác</a></li>
                </ul>
            </nav>
        </div >
    )
}

export default Menu