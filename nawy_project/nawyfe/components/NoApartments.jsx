import React from 'react';
import Link from "next/link";

const NoApartments = () => {

  

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                No Apartments Available
            </h2>
            <p className="text-lg text-gray-600 mb-6">
                Currently, there are no apartments listed. Please add some!
            </p>
            <Link
              href="/apartments/create"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-700"
            >
              Add Apartment
            </Link>
        </div>
    );
};

export default NoApartments;

