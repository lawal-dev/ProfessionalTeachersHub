import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const RegisterAsSchool = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <div>
            {loading
                ? <Loading />
                :


                <div className='relative'>
                    <Link to='/'>
                        <div className='absolute top-3 left-4'>
                            <Button content='Back Home' />
                        </div>
                    </Link>
                <section className='flex justify-center items-center h-[100vh] w-[100%]'>


                        <div className='m-8 p-4 bg-white rounded-lg shadow-md lg:w-1/4 max-md:w-3/4 max-sm:w-[90%]'>
                            <div className='text-center leading-none mb-8'>
                                <h1 className="text-2xl font-bold mb-4 text-primary max-sm:text-xl"> ProfessionalTeachersHub</h1>
                                <p className='text-md text-slate-500'>Register as School</p>
                            </div>

                            <form action="">
                                <input
                                    type="text"
                                    // ref={nameRef}
                                    className="input_text"
                                    placeholder='Name of School '
                                    required
                                />

                                <input
                                    type="text"
                                    // ref={emailRef}
                                    className="input_text"
                                    placeholder='Email'
                                    required
                                />

                                <input
                                    type="text"
                                    // ref={nameRef}
                                    className="input_text"
                                    placeholder='School Address'
                                    required
                                />

                                <input
                                    type="date"
                                    // ref={emailRef}
                                    className="input_text"
                                    placeholder='Date of Establishment'
                                    required
                                />


                                <input
                                    type="number"
                                    // ref={emailRef}
                                    className="input_text"
                                    placeholder='Phone Number'
                                    required
                                />


                                <input
                                    type="password"
                                    // ref={passwordRef}
                                    className="input_text"
                                    placeholder='Password'
                                />

                                <input
                                    type="password"
                                    // ref={passwordRef}
                                    className="input_text"
                                    placeholder='Confirm Password'
                                />

                                <div className='text-center'>
                                    <Button content='Register' />

                                </div>

                            </form>
                            <p className='text-sm text-center mt-3'> I have an account. <Link to='/login' className='font-semibold text-secondary'> Login </Link> </p>


                        </div >
                    </section>
                </div>
            }
        </div>
    )
}

export default RegisterAsSchool