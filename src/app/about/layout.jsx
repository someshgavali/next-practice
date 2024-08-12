import Link from "next/link";
import React from "react";
import "./about.css";

const LoginLayoutPage = ({ children }) => {
  return (
    <div>
      <ul className="aboutMenu">
        <li>
          <h4 className="heading">About Navbar</h4>
        </li>
        <li>
          <Link href="/">About Main</Link>
        </li>
        <li>
          <Link href="/login/login-student">About Student</Link>
        </li>
        <li>
          <Link href="/login/login-teacher">About Teacher</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default LoginLayoutPage;
