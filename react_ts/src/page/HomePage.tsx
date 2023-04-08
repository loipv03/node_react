import { useEffect, useState } from "react"
import { getAllCategoryes } from "../api/categoryes"
import { getAllProducts } from "../api/products"
import { IProduct } from "../types/products"
import { ICategoryes } from "../types/categoryes"

export const HomePage = () => {
    const [product, setProduct] = useState<IProduct[]>([])
    const [category, setCategory] = useState<ICategoryes[]>([])
    useEffect(() => {
        getAllProducts().then(({ data }) => setProduct(data))
        getAllCategoryes().then(({ data }) => setCategory(data))
    }, [])
    return (
        <div className="max-w-screen-xl m-auto">
            <header className="w-full h-24 bg-blue-500 flex items-center justify-center">
                <a href="http://localhost:5173/"><img src="/public/Group 1 (1).svg" className="mr-20" /></a>
                <div className="search flex">
                    <input type="text" className="h-8 w-96" />
                    <div className="btn w-24 bg-blue-800">
                        <button className="w-full p-1 text-white"><i className="fas fa-search" />Tìm kiếm</button>
                    </div>
                </div>
                <div className="account grid grid-cols-2">
                    <i className="far fa-user m-auto text-white text-3xl" />
                    <div className="capitalize text-white grid grid-cols-1 -ml-9">
                        <div>
                            <a href="http://localhost:5173/signin">đăng nhập</a>/<a href="#">đăng ký</a>
                        </div>
                        <a href="http://localhost:5173/admin/categoryes">Admin</a>
                    </div>
                </div>
                <div className="ml-16">
                    <i className="fas fa-shopping-cart text-white text-3xl" />
                    <span className="text-white">Giỏ hàng</span>
                </div>
            </header>
            <div className="bg-slate-200">
                <p className="max-w-screen-2xl m-auto text-slate-500">Trang chủ  &gt; <mark className="text-black bg-slate-200">Nhà Sách Tiki</mark></p>
            </div>
            <div className="max-w-screen-2xl m-auto mt-3 grid grid-cols-[280px_1fr] gap-5">
                <div>

                    <h3 className="mb-5 font-semibold">DANH MỤC SẢN PHẨM</h3>
                    <ul>
                        {category.map((item) => {
                            return (
                                <li key={item._id} className="my-2 capitalize font-medium text-sm">
                                    <a href="#">{item.name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h1 className="text-3xl font-medium mb-4">Nhà Sách Tiki</h1>
                    <img className="h-72 w-full	" src="/public/Rectangle (13).png" alt="" />
                    <ul>
                        <li className="inline-block p-4 hover:bg-slate-300 hover:text-red-600"><a href="#">Phổ biến</a></li>
                        <li className="inline-block p-4 hover:bg-slate-300 hover:text-red-600"><a href="#">Bán chạy</a></li>
                        <li className="inline-block p-4 hover:bg-slate-300 hover:text-red-600"><a href="#">Hàng mới</a></li>
                        <li className="inline-block p-4 hover:bg-slate-300 hover:text-red-600"><a href="#">Giá thấp</a></li>
                        <li className="inline-block p-4 hover:bg-slate-300 hover:text-red-600"><a href="#">Giá cao</a></li>
                    </ul>
                    <hr />
                    <div>
                        <button className="p-1 ml-1.5 mt-1.5 bg-stone-100 rounded-full"><img src="./img1/Rectangle (2).png" alt="" /></button>
                        <button className="p-1 ml-1.5 mt-1.5 bg-stone-100 rounded-full"><img src="./img1/Rectangle (1).png" alt="" /></button>
                    </div>
                    <div className="grid grid-cols-4 gap-5 mt-3	">
                        {product.map((item) => {
                            return (
                                <a key={item._id} href="#">
                                    <img className="w-48 h-48 transform transition-all duration-500 hover:scale-125" src={item.image} alt="" />
                                    <img src="./public/Rectangle(2).png" alt="" />
                                    <p className="text-green-600 pt-2 text-sm pb-2.5">GIAO SIÊU TỐC 2H</p>
                                    <p className="pb-2.5 font-medium">{item.name}</p>
                                    <p className="pb-2.5">{item.desc}</p>
                                    <div className="grid grid-cols-[13.33px_13.33px_13.33px_13.33px_13.33px_1fr] gap-1">
                                        <img src="./public/Vector.png" alt="" />
                                        <img src="./public/Vector.png" alt="" />
                                        <img src="./public/Vector.png" alt="" />
                                        <img src="./public/Vector.png" alt="" />
                                        <img src="./public/Vector.png" alt="" />
                                        <p className="text-xs text-slate-500">da ban 1000+</p>
                                    </div>
                                    <span className="text-red-500">{item.price} ₫</span>
                                </a>
                            )
                        })}
                    </div>
                </div>

            </div><div className="max-w-screen-2xl m-auto mt-10">
                <div className="grid grid-cols-5 gap-14">
                    <div className="pt-11">
                        <h4 className="text-xl pb-1.5">Hỗ trợ khách hàng</h4>
                        <p className="text-gray-500	text-sm	">Hotline: 1900-6035<br />
                            Các câu hỏi thường gặp <br />
                            Gửi yêu cầu hỗ trợ <br />
                            Hướng dẫn đặt hàng <br />
                            Phương thức vận chuyển <br />
                            Chính sách đổi trả <br />
                            Hướng dẫn trả góp <br />
                            Chính sách hàng nhập khẩu <br />
                            Hỗ trợ khách hàng: hotro@tiki.vn <br />
                            Báo lỗi bảo mật: security@tiki.vn</p>
                    </div>
                    <div className="pt-11">
                        <h4 className="text-xl pb-1.5">Về Tiki</h4>
                        <p className="text-gray-500	text-sm	">Giới thiệu Tiki <br />
                            Tiki Blog <br />
                            Tuyển dụng <br />
                            Chính sách bảo mật thanh toán <br />
                            Chính sách bảo mật thông tin cá nhân <br />
                            Chính sách giải quyết khiếu nại <br />
                            Điều khoản sử dụng <br />
                            Giới thiệu Tiki Xu <br />
                            Gửi Astra nhận Xu mua sắm thả ga <br />
                            Tiếp thị liên kết cùng Tiki <br />
                            Bán hàng doanh nghiệp <br />
                            Điều kiện vận chuyển</p>
                    </div>
                    <div className="pt-11">
                        <h4 className="text-xl pb-1.5">Hợp tác và liên kết</h4>
                        <p className="text-gray-500	text-sm	">Quy chế hoạt động Sàn GDTMĐT
                            Bán hàng cùng Tiki</p>
                        <img src="/public/teat1.png" alt="" />
                    </div>
                    <div className="pt-11">
                        <h4 className="text-xl pb-1.5">Phương thức thanh toán</h4>
                        <img src="/public/thanhToan.png" alt="" />
                    </div>
                    <div className="pt-11">
                        <h4 className="text-xl pb-1.5">Kết nối với chúng tôi</h4>
                        <img src="/public/ketNoi.png" alt="" />
                    </div>
                </div>
                <hr />
                <div className="pt-5">
                    <p className="text-gray-500 text-sm	">Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh <br />
                        Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng <br />
                        Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022 <br />
                        © 2022 - Bản quyền của Công ty TNHH Ti Ki</p>
                </div>
            </div>
        </div>
    )
}

