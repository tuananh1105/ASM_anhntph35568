const Button = () => {
    return (
        <div>
            <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                    <a className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black shadow hover:bg-gray-400" href="#">
                        Hotline 24/7
                    </a>
                    <div className="hidden sm:flex">
                        <a className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black shadow hover:bg-gray-400" href="#">
                            Đăng Nhập
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Button