import { useAuth } from "../contexts/AuthenContext";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

const Search = () => {
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

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/userData.json")
      .then((res) => res.json())
      .then((result) => {
        setData(result.data?.dialog?.items);
        console.log(result.data?.dialog?.items);
      });
  }, []);

  const filteredResults = useMemo(() => {
    return data.filter((item) =>
      item?.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, data]);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 " : "bg-gray-100 text-black"
      } min-h-screen`}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-gray-300 uppercase px-6 max-sm:text-sm max-sm:items-center ">
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

      <div>
        <div className="text-center text-2xl p-6 uppercase">
          <h1 className="text-gray-500 dark:text-white font-semibold">
            Search Our Team
          </h1>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mt-5 p-1 border border-gray-300 dark:border-gray-600 rounded w-1/2"
            placeholder=" Search employee..."
          />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {filteredResults.map((user) => (
              <div
                key={user.id}
                className="p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-gray-900 dark:text-white transform transition duration-300 hover:scale-105"
              >
                <h2 className="text-lg font-semibold">{user.title}</h2>
                <img
                  className="rounded-2xl m-auto my-3 h-48"
                  src={
                    user?.avatar.length === 0
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpRBlk_XFWCvj9ey1JdCE8I81b61x5p9maGazqB-v-e3ZQNpgOQCon0s7XjSIMUoELbU&usqp=CAU"
                      : user.avatar
                  }
                  alt=""
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 ">
                  {user.email}
                </p>
                <p className="text-sm text-gray-900 dark:text-gray-400 font-semibold">
                  {user.customData.workPosition}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Phone : {user.customData.phones.personal_mobile}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Status: {"🟢"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
