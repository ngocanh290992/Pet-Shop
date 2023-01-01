

import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP_ACTION, LAY_DANH_SACH_MA_LOAI_NGUOI_DUNG, LAY_DANH_SACH_NGUOI_DUNG, SET_THONG_TIN_NGUOI_DUNG } from "../types/QuanLyNguoiDungType";
import { history } from '../../App'


export const dangNhapAction = (thongTinDangNhap) => {


    return async (dispatch) => {

        try {
            //Sử dụng tham số thamSo
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
            console.log(result)
            if (result.status === 200) {
                alert("Đăng nhập thành công")
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data
                });

                // history.push('/')
            }

        } catch (errors) {
            alert(`status: ${errors.response.status} - ${errors.response.data.messeger}`)
        }
    };
}


export const layThongTinNguoiDungAction = (thongTinDangNhap) => {



    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung();


            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });

            }

        } catch (error) {
            console.log('error', error.response.data);


        }

    }

}


export const dangKyAction = (nguoiDungMoi) => {
    return async dispatch => {

        try {

            const result = await quanLyNguoiDungService.dangKy(nguoiDungMoi);
            console.log(result.status)
            if (result.status === 201) {
                alert('Đăng ký thành công!')
                // history.push('/home')
            }

        } catch (error) {
            if (error.response.data) {
                alert(`${error.response.data.messeger}`)
            }

            console.log('error', error);
        }
    }

}

export const layDanhSachNguoiDungAction = (nameSearch = '') => {

    return async dispatch => {
        try {

            let result = await quanLyNguoiDungService.layDanhSachNguoiDung(nameSearch)

            dispatch({
                type: LAY_DANH_SACH_NGUOI_DUNG,
                danhSachNguoiDung: result.data.content
            })

        } catch (error) {
            console.log('error', error.response?.data)
        }
    }

}

export const layDanhSachMaLoaiNguoiDungAction = () => {
    return async dispatch => {
        try {
            let result = await quanLyNguoiDungService.layDanhSachMaLoaiNguoiDung()

            dispatch({
                type: LAY_DANH_SACH_MA_LOAI_NGUOI_DUNG,
                arrMaLoaiNguoiDung: result.data.content
            })
        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}

export const themNguoiDungAction = (nguoiDungMoi) => {
    return async dispatch => {
        try {
            let result = await quanLyNguoiDungService.themNguoiDung(nguoiDungMoi)

            if (result.status === 200) {
                alert('Thêm người dùng thành công')
                history.push('/admin/users')
            }

        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}

export const chinhSuaNguoiDungAction = (model) => {
    return async dispatch => {
        try {
            let result = await quanLyNguoiDungService.chinhSuaNguoiDung(model)

            if (result.status === 200) {
                alert('Chỉnh sửa người dùng thành công')
                history.push('/admin/users')
            }

        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}

export const xoaNguoiDungAction = (taiKhoan) => {
    return async dispatch => {
        try {
            let result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan)

            if (result.status === 200) {
                alert('Xóa thành công')
                dispatch(layDanhSachNguoiDungAction())
            }
        } catch (error) {
            console.log('error', error.response?.data)
            alert(error.response?.data.content)
        }
    }
}

export const capNhatThongTinNguoiDungAction = (model) => {
    return async dispatch => {
        try {
            let result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(model)

            if (result.status === 200) {
                alert('Cập nhật thành công !')

            }
        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}