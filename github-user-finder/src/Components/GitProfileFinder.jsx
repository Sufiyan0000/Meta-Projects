import { useEffect, useState } from "react";
import UserCard from "./Card";
import "./style.css";

export default function GitProfileFinder() {
  const [username, setUsername] = useState("Sufiyan0000");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGitUser() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();

    if (data) {
      setUserData(data);
      setLoading(false);
    }

    console.log(data);
  }

  useEffect(() => {
    fetchGitUser();
  }, []);

  if (loading) {
    return <h2>Loading Data.... Please wait</h2>;
  }

  function handleSearch() {
    fetchGitUser();
    setUsername("");
  }

  return (
    <div className="App">
      <div className="container">
        <input
          className="search-area"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button 
        disabled = {username !== '' ? false : true}
        className="btn"
        onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="user-card">
        {userData !== null ? <UserCard user={userData} /> : null}
      </div>
    </div>
  );
}
