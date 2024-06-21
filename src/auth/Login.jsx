import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";


const Login = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <div>

            {loading
            ? <Loading/>
            :

                <div className='relative'>
                    <Link to='/'>
                        <div className='absolute top-3 left-4'>
                            <Button content='Back Home' />
                        </div>
                    </Link>

                    <div className='flex h-screen  items-center justify-center  '>


                        <div className='p-4 place-items-center bg-white rounded-lg shadow-md md:w-1/4 max-md:w-2/4 max-sm:w-3/4 '>
                            <div className='text-center leading-none mb-8'>
                                <h1 className="text-2xl font-bold mb-4 text-primary max-sm:text-xl"> ProfessionalTeachersHub</h1>
                                <p className='text-md text-slate-500'>Login</p>
                            </div>

                            <form action="">
                                <input
                                    type="text"
                                    // ref={nameRef}
                                    className="input_text"
                                    placeholder='LoginID '
                                    required
                                />

                                <input
                                    type="password"
                                    // ref={passwordRef}
                                    className="input_text"
                                    placeholder='Password'
                                />

                                <div className='text-center'>
                                    <Button content='Login' />

                                </div>

                            </form>
                            <p className='text-sm text-center mt-3'> I don't have an account. <Link to='/registerAs' className='font-semibold text-secondary '> Register </Link> </p>


                        </div >
                    </div>
                </div>
            }
        </div>
    )
}

export default Login