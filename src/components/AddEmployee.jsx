import { useAuth } from "../contexts/AuthenContext";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const UserProfile = () => {
  const [role, setRole] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!role) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://randomuser.me/api/?results=10&inc=name,picture,location`
      );
      const data = await response.json();
      const formattedUsers = data.results.map((user, index) => ({
        id: index,
        name: `${user.name.first} ${user.name.last}`,
        role: role,
        location: `${user.location.city}, ${user.location.country}`,
        avatar: user.picture.large,
      }));
      setUsers(formattedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

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
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } min-h-screen`}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-gray-300 uppercase px-6">
        <h1 className="text-xl font-bold">Nexgen Nextopia</h1>
        <div className="flex space-x-4">
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
            className="bg-red-600 px-4 py-1 rounded-lg hover:bg-red-500 font-semibold text-white"
          >
            Logout
          </button>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-600 rounded-full focus:outline-none"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Search Box */}
      <div className="flex justify-center mt-10">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
          <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Search Users by Job Role
          </h1>
          <input
            type="text"
            placeholder="Enter job role (e.g., Software Engineer)"
            className="w-full p-2 border rounded-md mb-3"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* Display Loading State */}
      {loading && (
        <div className="text-center text-gray-500 mt-6">Loading users...</div>
      )}

      {/* Display User Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 text-center"
          >
            <img
              className="rounded-full w-24 h-24 mx-auto mb-4"
              src={user.avatar}
              alt="User Avatar"
            />
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              {user.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{user.role}</p>
            <p className="text-gray-600 dark:text-gray-400">{user.location}</p>
            <button
              className="mt-2 bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-500"
              onClick={() => alert("✔ Added to the Team")}
            >
              Add Employee
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
