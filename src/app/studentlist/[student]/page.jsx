"use client";
import Link from "next/link";
import React from "react";

const StudentDetailsPage = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>Student Details Page</h1>
      <h4>Student Name : {params.student}</h4>
    </div>
  );
};

export default StudentDetailsPage;
