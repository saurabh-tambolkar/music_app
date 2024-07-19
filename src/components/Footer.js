import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
    <hr />
    <div className="bg-white dark:bg-black text-black dark:text-white py-12 h-[15rem]">
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 px-4">
        <div className="text-center">
          <h2 className="text-black dark:text-white text-center font-bold text-lg pb-4">About</h2>
          <p>Welcome to our music haven! We connect passionate listeners with the latest tracks, artist news, and exclusive content.</p>
        </div>
        <div className="text-center flex flex-col">
            <h2 className="text-black dark:text-white text-center font-bold text-lg pb-4">Quick links</h2>
            <Link href="/" className="text-black dark:text-white transition-all hover:text-gray-500">Home</Link>
            <Link href="/courses" className="text-black dark:text-white transition-all hover:text-gray-500">Courses</Link>
            <Link href="/" className="text-black dark:text-white transition-all hover:text-gray-500">About</Link>
            <Link href="/contact" className="text-black dark:text-white transition-all hover:text-gray-500">Contact</Link>
        </div>
        <div className="text-center flex flex-col">
            <h2 className="text-black dark:text-white text-center font-bold text-lg pb-4">Follow us</h2>
            <Link href="/" className="text-black dark:text-white transition-all hover:text-gray-500">Facebook</Link>
            <Link href="/" className="text-black dark:text-white transition-all hover:text-gray-500">Twitter</Link>
            <Link href="/" className="text-black dark:text-white transition-all hover:text-gray-500">Instagram</Link>
        </div>
        <div className="text-center">
            <h2 className="text-black dark:text-white text-center font-bold text-lg pb-4">Contact Us</h2>
            <p class="mb-2">Email: <Link href="mailto:saurabhtambolkar22@gmail.com" class="text-blue-400">info@musicwebsite.com</Link></p>
    <p >Phone: <Link href="tel:+9763356019" className="text-blue-400">9763356019</Link></p>
    <p >Address: 123 Music Lane, Melody City, Tune State, 12345</p>
        </div>
      </div>
      <div className="text-center py-5">
        <p className="text-neutral-500 text-sm ">© 2024 Music Academy. All rights reserved.</p>
      </div>
    </div>
    </>
  );
}

export default Footer;
