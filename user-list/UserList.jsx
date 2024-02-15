import React, { useEffect, useState } from "react";
import User from "./User";

const UserList = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => setUsers(data))
      .catch((e) => {
        if (e?.name === "AbortError") return;
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      <h1>User List</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      )}
    </>
  );
};

export default UserList;
