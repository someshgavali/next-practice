"use client";
import Link from "next/link";
import React from "react";
import "./login.css";
import { usePathname } from "next/navigation";

const LoginLayoutPage = ({ children }) => {
  const pathname = usePathname();
  return (
    <div>
      {pathname !== "/login/login-student" &&
      pathname !== "/login/login-teacher" ? (
        <ul className="loginMenu">
          <li>
            <h4>Login Navbar</h4>
          </li>
          <li>
            <Link href="/">Login Main</Link>
          </li>
          <li>
            <Link href="/login/login-student">Login Student</Link>
          </li>
          <li>
            <Link href="/login/login-teacher">Login Teacher</Link>
          </li>
        </ul>
      ) : (
        <Link href="/login">Go to main Login Page</Link>
      )}
      {children}
    </div>
  );
};

export default LoginLayoutPage;
