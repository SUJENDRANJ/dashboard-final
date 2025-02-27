import { useAuth } from "../contexts/AuthenContext";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black "
      } min-h-screen `}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800  text-gray-300 uppercase px-6 max-sm:text-sm max-sm:items-center ">
        <h1 className="text-xl font-bold">Nexgen Nextopia</h1>
        <div className="flex space-x-4 max-sm:flex-col max-sm:space-y-2 max-sm:space-x-0">
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/search" className="hover:underline">
            Search
          </Link>
          <Link to="/add-employee" className="hover:underline">
            Add Employee
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-1 rounded-lg hover:bg-red-600 font-semibold text-white max-sm:px-16"
          >
            Logout
          </button>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-600 rounded-full focus:outline-none mt-2 max-sm:mt-4 "
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center mt-10 ">
        <h2 className="text-4xl font-semibold text-gray-600">
          Welcome {currentUser?.email}! 🎉
        </h2>
        <p className="mt-2 text-lg">You are now logged in.</p>
      </div>

      <div className="flex justify-center gap-10 mt-10 px-6 flex-wrap">
        <div
          className="p-6 rounded-lg shadow-lg text-white text-center max-w-sm cursor-pointer bg-blue-500 "
          // onClick={() => navigate("/userprofile")}
        >
          <img
            src="https://cdn.bitrix24.in/b32626871/resize_cache/59/a7fa78f57e73ecbd0b9500a062d0d214/main/ff5/ff5b364afe33fc44a37649a63dad496f/monish-c.jpg.png"
            alt="CEO"
            className="w-4/5 m-auto h-40 bg-gray-300 rounded-xl object-cover"
          />
          <h3 className="text-2xl font-bold mt-4">👑 CEO</h3>
          <p className="mt-2 text-lg">
            Leading the company with vision and innovation.
          </p>
        </div>

        <div
          className="p-6 rounded-lg shadow-lg text-white text-center max-w-sm cursor-pointer bg-green-500 "
          // onClick={() => navigate("/userprofile")}
        >
          <img
            src="https://cdn.bitrix24.in/b32626871/resize_cache/375/a7fa78f57e73ecbd0b9500a062d0d214/main/97c/97ca58973f069cf268d4782516af2f02/avatar.png"
            alt="Managing Director"
            className="w-4/5 m-auto h-40 bg-gray-300 rounded-xl object-cover"
          />
          <h3 className="text-2xl font-bold mt-4">🏆 Managing Director</h3>
          <p className="mt-2 text-lg">
            Driving operations and strategic growth.
          </p>
        </div>
      </div>

      {/* Teams Section */}

      <h2 className="text-center font-bold  text-4xl text-gray-400 uppercase m-4 mt-10 ">
        OUR Teams
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-6 mt-10 max-w-[1200px] m-auto">
        <div
          className="p-6 rounded-lg shadow-lg bg-white text-black transform transition duration-300 hover:scale-105 cursor-pointer"
          onClick={() => navigate("/userprofile")}
        >
          <img
            src="https://cdn.bitrix24.in/b32626871/resize_cache/275/ff58db95aecdfa09ae61b51b5fd8f63f/main/9d8/9d8eaeb5750b7ad633a2f379a91cc2bb/Hp.jpg.png"
            alt="Full Stack Team"
            className="w-4/5 m-auto h-40 bg-gray-300 rounded-xl object-cover"
          />
          <h3 className="text-xl font-semibold mt-4">💻 Full Stack Team</h3>
          <p className="mt-2">Explore the team and their amazing work.</p>
        </div>

        <div
          className="p-6 rounded-lg shadow-lg bg-white text-black transform transition duration-300 hover:scale-105 cursor-pointer"
          onClick={() => navigate("/userprofile1")}
        >
          <img
            src="https://cdn.bitrix24.in/b32626871/resize_cache/55/a7fa78f57e73ecbd0b9500a062d0d214/main/f37/f37dd56bf8b1c483a0bccd2aa88c5f28/IMG_20250113_163645%20_1_.jpg.png"
            alt="Full Stack Team"
            className="w-4/5 m-auto h-40 bg-gray-300 rounded-xl object-cover"
          />
          <h3 className="text-xl font-semibold mt-4">🎬 Media Team</h3>
          <p className="mt-2">Explore the team and their amazing work.</p>
        </div>
        <div
          className="p-6 rounded-lg shadow-lg bg-white text-black transform transition duration-300 hover:scale-105 cursor-pointer"
          onClick={() => navigate("/userprofile2")}
        >
          <img
            src="https://cdn.bitrix24.in/b32626871/resize_cache/253/a7fa78f57e73ecbd0b9500a062d0d214/main/8aa/8aad689447ae8a6d16112b0187e887c1/avatar.png"
            className="w-4/5 m-auto h-40 bg-gray-300 rounded-xl object-cover"
          />
          <h3 className="text-xl font-semibold mt-4">📢 Marketing Team</h3>
          <p className="mt-2">Explore the team and their amazing work.</p>
        </div>
        <div
          className="p-6 rounded-lg shadow-lg bg-white text-black transform transition duration-300 hover:scale-105 cursor-pointer"
          onClick={() => navigate("/userprofile3")}
        >
          <img
            src="https://cdn.bitrix24.in/b32626871/resize_cache/101/a7fa78f57e73ecbd0b9500a062d0d214/main/a95/a95e4f56f913803e0d412088be19f9d9/avatar.png"
            alt="Full Stack Team"
            className="w-4/5 m-auto h-40 bg-gray-300 rounded-xl object-cover"
          />
          <h3 className="text-xl font-semibold mt-4">🔌 Embedded Team</h3>
          <p className="mt-2">Explore the team and their amazing work.</p>
        </div>
        <div
          className="p-6 rounded-lg shadow-lg bg-white text-black transform transition duration-300 hover:scale-105 cursor-pointer"
          // onClick={() => navigate("/userprofile1")}
        >
          <img
            src="https://cdn.bitrix24.in/b32626871/resize_cache/95/a7fa78f57e73ecbd0b9500a062d0d214/main/037/037dc9bb9a2cf173077fb0f52b3a8cd2/SOUMI%201.jpg.png"
            alt="Full Stack Team"
            className="w-4/5 m-auto h-40 bg-gray-300 rounded-xl object-cover"
          />
          <h3 className="text-xl font-semibold mt-4">🎨 Designer Team</h3>
          <p className="mt-2">Explore the team and their amazing work.</p>
        </div>
      </div>
      <FloatingSearchIcon />
    </div>
  );
}

const FloatingSearchIcon = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/search")}
      className="fixed bottom-6 right-6 hover:bg-purple-500 text-white p-4 rounded-full shadow-lg text-xl bg-orange-400 font-mono"
    >
      🔍 Search Employee
    </button>
  );
};
