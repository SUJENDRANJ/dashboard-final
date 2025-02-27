import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthenContext";
import { useState } from "react";

export default function Login() {
  const { login, signup } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      const success = login(email, password);
      if (success) {
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } else {
      const success = signup(email, password);
      if (success) {
        navigate("/dashboard");
      } else {
        alert("User already exists");
      }
    }
  };

  return (
    <>
      <div
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        } flex items-center justify-center min-h-screen flex-col pb-14`}
      >
        <h1 className="text-3xl mb-6 uppercase font-semibold text-gray-500 ">
          Nexgen Nextopia
        </h1>
        <div
          className={`w-full max-w-md ${
            darkMode ? "bg-gray-800" : "bg-white"
          } p-6 rounded-lg shadow-md`}
        >
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="absolute top-4 right-4 p-2 bg-gray-300 rounded-full focus:outline-none"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <h2 className="text-2xl font-bold text-center mb-4">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className={`w-full py-2 rounded-lg text-white ${
                isLogin
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="text-center mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 ml-1"
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
