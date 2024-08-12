import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">Go To Home Page</Link>

      <br />
      <br />
      <Link href="/about/about-student">Go To About Student Page</Link>
      <br />
      <br />
      <Link href="/about/about-collage">Go To About Collage Page</Link>
    </div>
  );
};

export default AboutPage;
