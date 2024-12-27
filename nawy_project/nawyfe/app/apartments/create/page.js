"use client";
import { React, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const Create = () => {
  //creating state for each field in the add apartment form
  const [title, setTitle] = useState("");
  const [size, setSize] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [deliveryIn, setDeliveryIn] = useState("");
  const [developerName, setDeveloperName] = useState("");
  const [developerMail, setDeveloperMail] = useState("");
  const [developerPhone, setDeveloperPhone] = useState("");

  const router = useRouter();
  //submitForm function to handle onclick event for add apartment button
  const submitForm = (e) => {
    e.preventDefault();

    const newApartment = {
      title,
      size,
      location,
      description,
      price,
      bedrooms,
      bathrooms,
      deliveryIn,
      developerName,
      developerMail,
      developerPhone,
    };
    addApartmentSubmit(newApartment);
    toast.success("Apartment added sucessfully");
    return router.push("/apartments");
  };
  //addApartmentSubmit function to call the api and add new apartment
  const addApartmentSubmit = async (newApartment) => {
    const res = await fetch("http://localhost:7070/apartments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newApartment),
    });
    return;
  };
  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Add New Apartment
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Apartment Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Apartment - ZED East"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                required
                placeholder="Add you Apartment description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="proce"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Add Apartment price in EGP"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. ZED East, New Cairo, Egypt"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Delivery In
              </label>
              <input
                type="number"
                id="delivery"
                name="delivery"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Delivery Date"
                required
                value={deliveryIn}
                onChange={(e) => setDeliveryIn(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Size</label>
              <input
                type="number"
                id="size"
                name="size"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Add your Apartment size"
                required
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Bedrooms
              </label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter number of bedrooms"
                required
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Bathrooms
              </label>
              <input
                type="number"
                id="bathrooms"
                name="bathrooms"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter number of bathrooms"
                required
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              />
            </div>

            <h3 className="text-2xl mb-5">Developer Info</h3>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
                Developer Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Developer Name"
                value={developerName}
                required
                onChange={(e) => setDeveloperName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Developer Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for developer"
                required
                value={developerMail}
                onChange={(e) => setDeveloperMail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Developer Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                required
                className="border rounded w-full py-2 px-3"
                placeholder="Mobile phone for developer"
                value={developerPhone}
                onChange={(e) => setDeveloperPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Apartment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Create;
