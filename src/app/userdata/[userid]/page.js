async function getUsers(id) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  let usersData = await data.json();
  return usersData;
}

const UserDetailsPage = async ({ params }) => {
  const userId = parseInt(params.userid);
  const users = await getUsers(userId);
  return (
    <div>
      <h1>UserDataPage</h1>
      <h2>Name: {users.name}</h2>
      <h3>Email: {users.email}</h3>
      <p>Age: {users.age}</p>
    </div>
  );
};

export default UserDetailsPage;
