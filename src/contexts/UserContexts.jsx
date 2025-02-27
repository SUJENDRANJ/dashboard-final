import { useEffect, useState } from "react";

const UserContexts = () => {
  const [userData, setUserData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("/data/userData.json");

      const data = await res.json();
      const finalData = data?.data?.dialog?.items;

      setUserData(finalData);
    }
    fetchUser();
  }, []);

  return <div>UserContexts</div>;
};

export default UserContexts;
