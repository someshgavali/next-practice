"use client";
import { useState } from "react";
import "./style.css";

const AddUserPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const addUser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response.success) {
      alert("User added successfully");
      setName("");
      setAge("");
      setEmail("");
    } else {
      alert("please fill the form");
    }
  };

  return (
    <div className="add-user">
      <h1>Add New User</h1>
      <input
        value={name}
        className="input-field "
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={age}
        className="input-field "
        type="text"
        placeholder="Enter your age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        value={email}
        className="input-field "
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addUser} className="btn">
        {" "}
        Add User
      </button>
    </div>
  );
};

export default AddUserPage;
