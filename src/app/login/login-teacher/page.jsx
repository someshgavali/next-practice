"use client";
import React from "react";
import { useRouter } from "next/navigation";
const LoginTeacher = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/login");
  };
  return (
    <div>
      <h1 className="heading">LoginTeacher page for collage</h1>
      <br />
      <button onClick={handleLoginClick}>Go to Login Page</button>
    </div>
  );
};

export default LoginTeacher;
