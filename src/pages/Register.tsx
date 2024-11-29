import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import Input from "../../src/components/Input"
import { schema } from "../../src/utils/rule"
import { yupResolver } from "@hookform/resolvers/yup"
type Inputs = {
    email: string,
    password: string,
    confirm_password: string
}
function Register() {
  const {register, handleSubmit, formState: {errors}} = useForm<Inputs>({resolver: yupResolver(schema)})
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng ký</div>
              <Input className='mt-8' register={register} name='email' type='email' placeholder='Email' errorMessage= {errors?.email?.message}/>

              <Input className='mt-2' register={register} name='password' type='password' placeholder='Password' errorMessage={errors?.password?.message}/>

              <Input className='mt-2' register={register} name='confirm_password' type='password' placeholder='Confirm password' errorMessage={errors?.confirm_password?.message}/>
              <div className='mt-2'>
                <button type="submit" className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-center">
                    <span className="text-slate-400 mr-2">Bạn đã có tài khoản</span>
                    <Link className="text-red-400" to='/login'>Đăng nhập</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
