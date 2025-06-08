const Navbar = () => {
  return (
    <div className="fixed top-0 left-[15%] w-[calc(100%-15%)] z-10 bg-white">
    <nav className=" text-gray-900 p-3 flex flex-row-reverse">
      
      <div className="flex items-center space-x-4">
        <span className="text-sm">Antti Hakkarainen</span>
        <button className="bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-800">
          LogOut
        </button>
       
      </div>
    </nav>
    </div>
  );
};

export default Navbar;