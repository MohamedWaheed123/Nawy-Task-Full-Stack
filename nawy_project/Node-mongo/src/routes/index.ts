import express from "express";
import ApartmentController from "../controllers/ApartmentController";

const router =express.Router();

//creating routes linked with each function created in the ApartmentController
router.get("/apartments",ApartmentController.getAllApartments);
router.get("/apartments/:id",ApartmentController.getApartment);
router.put("/apartments/:id",ApartmentController.updateApartment);
router.post("/apartments",ApartmentController.createApartment);
router.delete("/apartments/:id",ApartmentController.deleteApartment);

export default router;