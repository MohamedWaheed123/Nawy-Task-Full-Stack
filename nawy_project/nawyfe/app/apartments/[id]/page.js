"use client";
import { React, useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaMapMarker,
  FaBath,
  FaTruck,
  FaBed,
  FaRulerCombined,
} from "react-icons/fa";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const View = ({ params }) => {
  //getting the id of the apartment from the url params
  const id = params.id;
  const router = useRouter();

  //state for apartment with id passed in the url
  const [apartment, setApartment] = useState([]);

  useEffect(() => {
    if (id) {
      fetchApartment();
    }
  }, [id]);
  //fetchApartment function to fetch specific apartment from api based on id
  const fetchApartment = async () => {
    //fetching apartment with specific id mentioned in the url params
    const res = await fetch(`http://localhost:7070/apartments/${id}`);
    const data = await res.json();

    //setting apartment state with apartment data
    setApartment(data["data"]);
  };
  //deleteApartment function to delete specific apartment based on id
  const deleteApartment = async (id) => {
    const res = await fetch(`http://localhost:7070/apartments/${id}`, {
      method: "DELETE",
    });
    return;
  };
  //onDeleteClick to handle onclick event for delete button
  const onDeleteClick = (apartmentId) => {
    //popup to confirm with the user the deletion process
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );

    if (!confirm) return;

    deleteApartment(apartmentId);

    toast.success("Apartment deleted successfully");
    //redirecting to apartments listings page
    return router.push("/apartments");
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/apartments"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Apartment Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-2 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{apartment.type}</div>
                <h1 className="text-3xl font-bold mb-4">{apartment.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1" />
                  <p className="text-orange-700">{apartment.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Apartment Description
                </h3>

                <p className="mb-4">{apartment.description}</p>
                <h3 className="text-indigo-800 text-md font-bold mb-2">
                  Price:
                </h3>

                <p className="mb-2 text-sm">{apartment.price} EGP</p>

                <div className="flex flex-col lg:flex-row lg:justify-between p-4 bg-white rounded-lg shadow-md">
                  <div className="flex flex-col lg:flex-row lg:justify-between w-full">
                    <div className="flex flex-col mb-4 md:mb-0 md:w-1/2">
                      <span className="flex items-center text-indigo-800 font-bold">
                        <FaTruck className="mr-2" /> Delivery
                      </span>
                      <span className="text-black">
                        In {apartment.deliveryIn}
                      </span>
                    </div>
                    <div className="flex flex-col mb-4 md:mb-0 md:w-1/2">
                      <span className="flex items-center text-indigo-800 font-bold">
                        <FaRulerCombined className="mr-2" /> Size
                      </span>
                      <span className="text-black">{apartment.size} m2</span>
                    </div>
                    <div className="flex flex-col mb-4 md:mb-0 md:w-1/2">
                      <span className="flex items-center text-indigo-800 font-bold">
                        <FaBed className="mr-2" /> Bedrooms
                      </span>
                      <span className="text-black">{apartment.bedrooms}</span>
                    </div>
                    <div className="flex flex-col mb-4 md:mb-0 md:w-1/2">
                      <span className="flex items-center text-indigo-800 font-bold">
                        <FaBath className="mr-2" /> Bathrooms
                      </span>
                      <span className="text-black">{apartment.bathrooms}</span>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Developer Info</h3>

                <h2 className="text-2xl">{apartment.developerName}</h2>

                <p className="my-2">{apartment.title} </p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {apartment.developerMail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {apartment.developerPhone}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Apartment</h3>
                <Link
                  href={`/apartments/edit/${apartment._id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Apartment
                </Link>
                <button
                  onClick={() => onDeleteClick(apartment._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Apartment
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export { View as default };
