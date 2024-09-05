import Link from "next/link";

async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  let usersData = await data.json();
  return usersData;
}

const UserDataPage = async () => {
  const users = await getUsers();

  return (
    <div>
      <h1>User List</h1>
      {users.map((item) => (
        <div key={item.id}>
          <Link href={`userdata/${item.id}`}> {item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default UserDataPage;
