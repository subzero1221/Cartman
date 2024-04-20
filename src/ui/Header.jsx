import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="top-0 z-50 text-white shadow-lg bg-gradient-to-r from-cyan-500 to-blue-700">
      <div className="container flex items-center justify-between p-2 mx-auto">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-16 h-16 overflow-hidden rounded-full">
            <img
              src="eric-cartman.png"
              alt="cartman"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-2xl font-bold tracking-wider">CartmanTrade</h1>
        </div>
        <nav>
          <ul className="flex space-x-6 text-sm md:text-base">
            <li>
              <NavLink
                to="/home"
                className="px-4 py-2 transition duration-300 ease-in-out transform rounded-lg hover:bg-blue-800 hover:-translate-y-1"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/crypto"
                className="px-4 py-2 transition duration-300 ease-in-out transform rounded-lg hover:bg-blue-800 hover:-translate-y-1"
              >
                Crypto
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/community"
                className="px-4 py-2 transition duration-300 ease-in-out transform rounded-lg hover:bg-blue-800 hover:-translate-y-1"
              >
                Community
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/markets"
                className="px-4 py-2 transition duration-300 ease-in-out transform rounded-lg hover:bg-blue-800 hover:-translate-y-1"
              >
                Markets
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
