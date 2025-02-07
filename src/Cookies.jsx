import { useState, useEffect } from "react";

function Cookies() {
  const [count, setCount] = useState(0);
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];
  const [users, setUser] = useState(mockData);
  const [newUser, setNewUser] = useState({});
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://catfact.ninja/facts");
        if (!response.ok) {
          throw new Error(`HTTP error. Status ${response.status}`);
        }
        const result = await response.json();
        const randomFacts = result.data
          .sort(() => 0.5 - Math.random())
          .slice(0, 5);
        setData(randomFacts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {data && (
          <div>
            {data.map((fact, index) => (
              <p key={index}>{fact.fact}</p>
            ))}
          </div>
        )}
      </div>
      <div>
        {users.map((user, i) => {
          return (
            <div key={i}>
              <h3>{user.username}</h3>
              <h3>{user.email}</h3>
            </div>
          );
        })}
        <input
          type="text"
          placeholder="username..."
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="email..."
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <button onClick={() => setUser((prev) => [...prev, newUser])}>
          Add user
        </button>
      </div>
      <div></div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img
          src="/cookie.png"
          alt="Cookie"
          onClick={() => setCount((count) => count + 1)}
          style={{
            width: "10%",
          }}
        />
        <p>Cookies: {count}</p>
      </div>
    </>
  );
}

export default Cookies;
