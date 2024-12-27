import mongoose from "mongoose";

//Apartments schema to create a mongo database document
const ApartmentSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    size: {
        type: Number, 
        required: true,
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    bathrooms: {
        type: Number,
        required: true,
    },
  
    deliveryIn: {
        type: Number,
        required: true, 
    },
    developerName: {
        type: String,
        required: true,
    },
    developerMail: {
        type: String,
        required: true,
    },
    developerPhone: {
        type: String,
        required: true,
    },
})
export const ApartmentModel=mongoose.model('Apartment',ApartmentSchema)