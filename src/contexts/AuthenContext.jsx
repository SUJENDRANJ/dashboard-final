import { useState, useContext, useEffect, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  const login = (email, password) => {
    const existingUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (existingUser) {
      setCurrentUser({ email });
      return true;
    }
    return false;
  };

  const signup = (email, password) => {
    const existingUser = users.find((user) => user.email === email);
    if (!existingUser) {
      const newUser = { email, password };
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setCurrentUser({ email });
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
