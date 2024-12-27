"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
//EditApartmentPage Here you can edit specific apartment
const EditApartmentPage = ({ params }) => {
  //getting the id of the apartment from the url params

  const id = params.id;
  //state for apartment with id passed in the url

  const [apartment, setApartment] = useState([]);
  const [title, setTitle] = useState(apartment.title);
  const [size, setSize] = useState(apartment.size);
  const [location, setLocation] = useState(apartment.location);
  const [description, setDescription] = useState(apartment.description);
  const [price, setPrice] = useState(apartment.price);
  const [bathrooms, setBathrooms] = useState(apartment.bathrooms);
  const [bedrooms, setBedrooms] = useState(apartment.bedrooms);
  const [deliveryIn, setDeliveryIn] = useState(apartment.deliveryIn);
  const [developerName, setDeveloperName] = useState(apartment.developerName);
  const [developerMail, setDeveloperMail] = useState(apartment.developerMail);
  const [developerPhone, setDeveloperPhone] = useState(
    apartment.developerPhone
  );

  const router = useRouter();
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
    const apartment = data["data"];
    //setting fields state with apartment data

    setApartment(data["data"]);
    setTitle(apartment.title);
    setSize(apartment.size);
    setLocation(apartment.location);
    setDescription(apartment.description);
    setPrice(apartment.price);
    setBathrooms(apartment.bathrooms);
    setBedrooms(apartment.bedrooms);
    setDeliveryIn(apartment.deliveryIn);
    setDeveloperName(apartment.developerName);
    setDeveloperMail(apartment.developerMail);
    setDeveloperPhone(apartment.developerPhone);
  };

  //updateApartmentSubmit function to call the api and update specific aprtment with it's id
  const updateApartmentSubmit = async (apartment) => {
    const res = await fetch(`http://localhost:7070/apartments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apartment),
    });
    return;
  };

  //submitForm function to handle updateApartment button
  const submitForm = (e) => {
    e.preventDefault();

    const updatedApartment = {
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

    updateApartmentSubmit(updatedApartment);

    toast.success("Apartment Updated Successfully");
    //redirecting to apartment details page
    return router.push(`/apartments/${id}`);
  };
  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Update Apartment
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
                Update Apartment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditApartmentPage;
