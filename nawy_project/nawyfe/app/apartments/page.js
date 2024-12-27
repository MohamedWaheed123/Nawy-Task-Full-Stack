"use client";
import React from "react";
import ApartmentListing from "@/components/ApartmentListing";
import { useState, useEffect } from "react";
import Spinner from "@/components/Spinner";

//ApartmentListings Here you can view all apartments
function ApartmentListings() {
  //apartments state which represents a list of apartments fetched from the api
  const [Apartments, setApartments] = useState([]);
  //loading state which represents whether the aprtments are fetched or not
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchApartments = async () => {
      try {
        //fetching the apartments from the api
        const res = await fetch("http://localhost:7070/apartments");
        const data = await res.json();
        console.log(data["data"]);
        //setting the apartments state with the apartments data
        setApartments(data["data"]);
      } catch (error) {
        //handling fetching errors
        console.log("error fetching data", error);
      } finally {
        //set loading state to false after fethching the data
        setLoading(false);
      }
    };
    fetchApartments();
  }, []);
  return (
    // <></>
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Apartments
        </h2>

        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Apartments.map((apartment) => (
              <ApartmentListing key={apartment.id} apartment={apartment} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ApartmentListings;
