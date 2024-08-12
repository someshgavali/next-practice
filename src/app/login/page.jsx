"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const handleStudentLoginClick = () => {
    router.push("/login/login-student");
  };
  const handleTeacherLoginClick = () => {
    router.push("/login/login-teacher");
  };
  return (
    <div>
      <h1 className="heading">Login page</h1>
      <Link href="/">Go To Home Page</Link>
      <br />
      <br />

      <button onClick={handleStudentLoginClick}>
        Go to Student Login Page
      </button>
      <br />

      <button onClick={handleTeacherLoginClick}>
        Go to Collage Login Page
      </button>
    </div>
  );
};

export default LoginPage;
