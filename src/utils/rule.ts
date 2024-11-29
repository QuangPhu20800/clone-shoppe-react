import * as yup from "yup"

export const schema = yup.object({
  email: yup.string()
  .required('Không được để trống email')
  .matches(/^\S+@\S+\.\S+$/, 'Email không đúng định dạng')
  .max(160, 'Độ dài từ 5-160 ký tự')
  .min(5, 'Độ dài từ 5-160 ký tự'),
  password: yup.string()
  .required('Không được để trống password')
  .max(20, 'Độ dài từ 5-20 ký tự')
  .min(5, 'Độ dài từ 5-20 ký tự'),
  confirm_password: yup.string()
  .required('Không được để trống confirm password')
  .max(20, 'Độ dài từ 5-20 ký tự')
  .min(5, 'Độ dài từ 5-20 ký tự')
  .oneOf([yup.ref('password')], 'Confirm password không trùng khớp')
})
