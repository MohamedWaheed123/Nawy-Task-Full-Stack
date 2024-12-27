import React from "react";
import Card from "./Card";
import Link from "next/link";

function HomeCards() {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Renters</h2>
            <p className="mt-2 mb-4">
              Experience Living Like Never Before – Browse Our Apartment
              Listings!
            </p>
            <Link
              href="/apartments"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Apartments
            </Link>
          </Card>
          <Card bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">For Developers</h2>
            <p className="mt-2 mb-4">
              Turn Your Property into Profit – Add Your Apartment to Nawy!
            </p>
            <Link
              href="/apartments/create"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-700"
            >
              Add Apartment
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default HomeCards;
