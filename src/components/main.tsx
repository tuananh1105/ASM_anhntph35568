import Cart from "./main/Cart"

const Main = () => {
    return (
        <div>
            <main>
                <div className="container max-w-screen-lg mx-auto mt-12 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl sm:text-2xl font-medium mb-4">Tuyến đường phổ biến</h2>
                    <div className="carousel relative max-w-[980px] overflow-x-auto">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                        </div>
                        <span className="prev opacity-35 size-9 bg-white rounded-full absolute top-[70px] left-[1%] sm:left-[4%] lg:left-[1%] flex items-center justify-center">
                            <svg width={9} height={14} viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.69229 12.6154L2.15383 7.07696L7.69229 1.53849" stroke="#707070" strokeWidth="1.84615" />
                            </svg>
                        </span>
                        <span className="next size-9 bg-white rounded-full absolute top-[70px] right-[4%] sm:right-[4%] lg:right-[4%] flex items-center justify-center">
                            <svg width={9} height={14} viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.30771 1.53845L6.84617 7.07691L1.30771 12.6154" stroke="#707070" strokeWidth="1.84615" />
                            </svg>
                        </span>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Main