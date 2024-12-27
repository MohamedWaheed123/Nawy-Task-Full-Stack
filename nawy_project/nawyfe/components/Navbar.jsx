"use client";
import React from "react";
import Link from "next/link";
import nawy from "../app/nawy.png";
import Image from "next/image";
function Navbar() {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link className="flex flex-shrink-0 items-center mr-4" href="/">
              <Image className="h-10 w-auto" src={nawy} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Nawy Shares
              </span>
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  href="/"
                  className="text-white  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Home
                </Link>
                <Link
                  href="/apartments"
                  className="text-white  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Apartments
                </Link>
                <Link
                  href="/apartments/create"
                  className="text-white  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Add Apartment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
