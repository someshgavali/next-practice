import React from "react";

async function userList() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  return data.users;
}

export default async function LoadingPage() {
  let users = await userList();
  console.log(users);
  return (
    <div>
      <h1>User List Page</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>
            {user.firstName} {user.lastName}
          </h2>
        </div>
      ))}
    </div>
  );
}
