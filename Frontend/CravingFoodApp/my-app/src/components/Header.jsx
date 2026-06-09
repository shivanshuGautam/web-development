function Header() {
  return (
    <>
      <header className="p-3 shadow-xl bg-[#c2410c] h-[60px] flex items-center">
        <div className="w-full flex items-center px-4">
          <div className="max-w-[100px]">
            <img src="images/craving-logo.png" alt="" className="w-full" />
          </div>

          <div className="ml-auto flex gap-4 items-center">
            <button className="text-white text-[17px]">Login</button>
            <button className="px-2 py-2 bg-amber-50 text-amber-500 rounded-xl">
              Register
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
