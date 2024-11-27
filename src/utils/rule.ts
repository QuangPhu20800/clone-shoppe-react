export const getRules = (getValue?: any) => {
  return {
    email: {
      required: {
        value: true,
        message: 'Không được để trống email'
      },
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: 'Email không đúng định dạng'
      },
      maxLength: {
        value: 160,
        message: 'Độ dài từ 5-160 ký tự'
      },
      minLength: {
        value: 5,
        message: 'Độ dài từ 5-160 ký tự'
      }
    },
    password: {
      required: {
        value: true,
        message: 'Không được để trống password'
      },
      maxLength: {
        value: 20,
        message: 'Độ dài từ 5-20 ký tự'
      },
      minLength: {
        value: 5,
        message: 'Độ dài từ 5-20 ký tự'
      }
    },
    confirm_password: {
      required: {
        value: true,
        message: 'Không được để trống password'
      },
      maxLength: {
        value: 20,
        message: 'Độ dài từ 5-20 ký tự'
      },
      minLength: {
        value: 5,
        message: 'Độ dài từ 5-20 ký tự'
      },
      validate: (value: any) => value === getValue('password') || 'Confirm password không trùng khớp'
    }
  }
}
