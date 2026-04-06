import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoLogIn } from "react-icons/io5";

const Navbar = () => {

    const [showLogin, setShowLogin] = useState(false)

    return (
        <div className="bg-gray-900 h-20 flex items-center">
            <div className="container">
                <main className='grid grid-cols-3'>
                    <div>
                        <Link to= "/" className="text-amber-100 text-2xl">Gandhkosh</Link>
                    </div>
                    <nav className=" grid grid-cols-4 text-lg gap-4 ">
                        <Link to="/" className="text-white hover:text-amber-100">Home</Link>
                        <Link to="/about" className="text-white hover:text-amber-100">About</Link>
                        <Link to="/explore" className="text-white hover:text-amber-100">Explore</Link>
                        <Link to="/contact" className="text-white hover:text-amber-100">Contact</Link>
                    </nav>
                    <div className='flex justify-end'>
                        
                        <button
                            onClick={() => setShowLogin(true)}
                            className='text-3xl  px-2 py-5px text-amber-200 rounded ' >
                            <IoLogIn />
                        </button>
                    </div>
                </main>
            </div>

            {showLogin && (
                <div className='fixed inset-0 bg-gray-800/65 flex items-center justify-center z-50'>
                    <div className='bg-green-50 p-8 rounded w-96'>
                        <button
                            onClick={() => { setShowLogin(false) }}
                            className=' float-end text-2xl  rounded text-cyan-800 '>
                            <IoIosCloseCircleOutline />
                        </button>
                        <h2 className="text-xl font-bold mb-6">Login</h2>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border px-4 py-2 rounded mb-4"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border px-4 py-2 rounded mb-6"
                        />
                        <button className="w-full bg-amber-200 py-2 rounded font-semibold">
                            Login
                        </button>
                    </div>
                </div>

            )}
        </div>
    )
}

export default Navbar
