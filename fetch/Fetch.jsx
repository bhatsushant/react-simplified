import React, { useEffect, useState } from "react";

const Fetch = () => {
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

  let jsx;
  if (loading) {
    jsx = <h2>Loading...</h2>;
  } else if (error != null) {
    jsx = <h2>Error!</h2>;
  } else {
    jsx = users.map((user) => (
      <div key={user.id}>
        <h1>{user.name}</h1>
      </div>
    ));
  }

  return <>{jsx}</>;
};

export default Fetch;
