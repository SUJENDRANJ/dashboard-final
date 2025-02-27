import { Route, Routes } from "react-router-dom";
import Login from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import Search from "./components/Search";
import AddEmployee from "./components/AddEmployee";
import UserProfile1 from "./components/UserProfile1";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/userprofile1" element={<UserProfile1 />} />
          <Route path="/search" element={<Search />} />
          <Route path="/add-employee" element={<AddEmployee />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
