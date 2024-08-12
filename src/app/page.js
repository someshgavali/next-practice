"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import profile from "../../public/vercel.svg";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleAboutClick = () => {
    router.push("/about");
  };

  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/login">Go to Login Page</Link>
      <br />
      <br />
      <Link href="/about">Go to About Page</Link>
      <br />
      <br />
      <Link href="/productlist">Go to productlist Page client side</Link>
      <br />
      <br />
      <Link href="/productslist">Go to productslist Page server side</Link>
      <br />
      <br />
      <button onClick={handleLoginClick}>Go to Login Page</button>
      <button onClick={handleAboutClick}>Go to About Page</button>
      {/* <Image src={profile} />
      <img src={profile.src} /> */}
    </div>
  );
}
