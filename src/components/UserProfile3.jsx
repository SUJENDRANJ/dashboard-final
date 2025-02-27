import UserCard from "./UserCard";
import { users } from "../userProfile/userProfile3";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthenContext";
import { useState, useEffect } from "react";

export default function userProfile3() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

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
        darkMode ? "bg-gray-900 text-gray-500" : "bg-gray-100 text-black"
      } min-h-screen overflow-hidden`}
    >
      {/* Navbar */}
      <nav className=" flex justify-between items-center p-4 bg-gray-800 text-gray-300 uppercase px-6 max-sm:text-sm max-sm:items-center ">
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
          className="p-2 bg-gray-600 rounded-full focus:outline-none mt-2 max-sm:mt-4"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
      <h1 className="text-4xl text-center  p-6 uppercase font-semibold">
        Embedded TEAM{" "}
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col items-center p-4 cursor-pointer hover:scale-105 transition-transform"
            // onClick={() => navigate(`/1/${user.id}`)}
          >
            <UserCard
              name={user.name}
              age={user.age}
              role={user.role}
              dept={user.dept}
              image={user.avatar}
              bio={user.bio}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
