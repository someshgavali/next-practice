"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const LoginCollage = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/login");
  };
  return (
    <div>
      <h1 className="heading">LoginCollage page for Student</h1>
      <br />
      <button onClick={handleLoginClick}>Back to Login Page</button>
    </div>
  );
};

export default LoginCollage;
