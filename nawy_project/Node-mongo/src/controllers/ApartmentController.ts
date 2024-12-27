import express from "express";
import { ApartmentModel } from "../db/apartment";

//ApartmentController to handle all apis functions
class ApartmentController {
  //api for getting all apartments linked by GET/apartments
  getAllApartments = async (
    request: express.Request,
    response: express.Response
  ) => {
    try {
      const apartments = await ApartmentModel.find();
      return response.status(200).json({ data: apartments });
    } catch (error) {
      console.log(error);
      return response.sendStatus(400);
    }
  };
  //api for getting specific apartment by it's id linked by GET/apartments/:id

  getApartment = async (
    request: express.Request,
    response: express.Response
  ) => {
    try {
      const { id } = request.params;
      const apartment = await ApartmentModel.findById(id);
      return response.status(200).json({ data: apartment });
    } catch (error) {
      console.log(error);
      return response.sendStatus(400);
    }
  };

  //api for creating apartment linked by POST/apartments

  createApartment = async (
    request: express.Request,
    response: express.Response
  ) => {
    try {
      const {
        title,
        description,
        price,
        location,
        size,
        bedrooms,
        bathrooms,
        deliveryIn,
        developerName,
        developerMail,
        developerPhone,
      } = request.body;
      const apartment = new ApartmentModel({
        title,
        description,
        price,
        location,
        size,
        bedrooms,
        bathrooms,
        deliveryIn,
        developerName,
        developerMail,
        developerPhone,
      });
      await apartment.save();

      return response
        .status(201)
        .json({ message: "Apartment Created", data: apartment });
    } catch (error) {
      console.log(error);
      return response.sendStatus(400);
    }
  };

  //api for updating specific apartment by it's id linked by PUT/apartments/:id

  updateApartment = async (
    request: express.Request,
    response: express.Response
  ) => {
    try {
      const { id } = request.params;

      const {
        title,
        description,
        price,
        location,
        size,
        bedrooms,
        bathrooms,
        deliveryIn,
        developerName,
        developerMail,
        developerPhone,
      } = request.body;
      const apartment = await ApartmentModel.findById(id);
      if (apartment) {
        (apartment.title = title),
          (apartment.description = description),
          (apartment.price = price),
          (apartment.location = location),
          (apartment.size = size),
          (apartment.bedrooms = bedrooms),
          (apartment.bathrooms = bathrooms),
          (apartment.deliveryIn = deliveryIn),
          (apartment.developerName = developerName),
          (apartment.developerMail = developerMail),
          (apartment.developerPhone = developerPhone),
          await apartment.save();
        return response
          .status(200)
          .json({ message: "Apartment Updated", data: apartment });
      }

      return response.sendStatus(400);
    } catch (error) {
      console.log(error);
      return response.sendStatus(400);
    }
  };
  //api for deleting specific apartment by it's id linked by DELETE/apartments/:id

  deleteApartment = async (
    request: express.Request,
    response: express.Response
  ) => {
    try {
      const { id } = request.params;
      await ApartmentModel.findByIdAndDelete({ _id: id });
      return response.status(200).json({ message: "Apartment Deleted" });
    } catch (error) {
      console.log(error);
      return response.sendStatus(400);
    }
  };
}

export default new ApartmentController();
