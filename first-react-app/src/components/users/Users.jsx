import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Users() {
  let [users, setUsers] = useState([]);

  async function getUsers() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    let usersList = await res.json();
    setUsers(usersList);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="text-center">
      <h2 className="display-3 text-info">Users</h2>
      {users.map((userObj) => (
        <p>
          <Link
            key={userObj.id}
            to={`/users/${userObj.id}`}
            state={{ user: userObj }}
          >
            {userObj.username}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default Users;
