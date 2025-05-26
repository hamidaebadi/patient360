const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-gray-400 p-3 flex flex-row-reverse">
      
      <div className="flex items-center space-x-4">
        <span className="text-sm">Antti Hakkarainen</span>
        <button className="bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-800">
          LogOut
        </button>
       
      </div>
    </nav>
  );
};

export default Navbar;