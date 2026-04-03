import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900">
        Gandhkosh
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/explore" className="text-gray-600 hover:text-gray-900 transition-colors">
          Explore
        </Link>
        <Link to="/brands" className="text-gray-600 hover:text-gray-900 transition-colors">
          Brands
        </Link>
      </div>

      {/* Right side — search + auth */}
      <div className="hidden md:flex items-center gap-4">

        {/* Search */}
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Search size={20} className="text-gray-600" />
        </button>

        {/* Auth buttons */}
        <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition-colors"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden p-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-100 flex flex-col gap-4 px-6 py-4 md:hidden">
          <Link to="/explore" onClick={() => setMenuOpen(false)} className="text-gray-700">Explore</Link>
          <Link to="/brands" onClick={() => setMenuOpen(false)} className="text-gray-700">Brands</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)} className="text-gray-700">Login</Link>
          <Link to="/signup" onClick={() => setMenuOpen(false)} className="text-gray-700">Sign Up</Link>
        </div>
      )}

    </nav>
  )
}

export default Navbar