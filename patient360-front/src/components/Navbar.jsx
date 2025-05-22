const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-gray-400 p-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search docs..."
          className="bg-gray-800 text-gray-300 placeholder-gray-500 
          p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500
          w-xl"
        />
        <button className="text-gray-500 hover:text-gray-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11l6 6m0-6l-6 6" />
          </svg>
        </button>
      </div>
      
      <div className="flex items-center space-x-4">
        <span className="text-sm">Antti Hakkarainen</span>
        <button className="bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-800">
          LogOut
        </button>
        <button className="text-gray-500 hover:text-gray-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </button>
        <button className="text-gray-500 hover:text-gray-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;