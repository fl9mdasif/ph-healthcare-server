import express from "express";
import { PatientController } from "./controller.patient";

const router = express.Router();

// get all patient
router.get("/", PatientController.getAllFromDB);

// get single patient
router.get("/:id", PatientController.getByIdFromDB);

// update patient
router.patch("/:id", PatientController.updateIntoDB);

// delete patient
router.delete("/:id", PatientController.deleteFromDB);

// soft delete
router.delete("/soft/:id", PatientController.softDelete);

export const PatientRoutes = router;
