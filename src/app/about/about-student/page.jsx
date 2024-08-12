"use client";
import React from "react";
import { useRouter } from "next/navigation";
const AboutStudent = () => {
  const router = useRouter();
  const handleAboutClick = () => {
    router.push("/about");
  };
  return (
    <div>
      <h1 className="heading">AboutStudent page for Student</h1>
      <br />
      <br />
      <button onClick={handleAboutClick}>Go to About Page</button>
    </div>
  );
};

export default AboutStudent;
