"use client";

// get current location
import Script from "next/script";
import React from "react";

const userDetailsPage = () => {
  return (
    <div>
      <Script
        src="/location.js"
        onLoad={() => console.log("locations loaded")}
      />
      <h1>User Details </h1>
    </div>
  );
};

export default userDetailsPage;
