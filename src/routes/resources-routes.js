import express from "express";
import {
    createResource,
    getAllResources,
    getResourceById,
    updateResource,
    deleteResource,
} from "../controllers/resource-controller.js";

const router = express.Router();

router.post("/add-resources", createResource);
router.get("/all-resources", getAllResources);
router.get("/resources/:id", getResourceById);
router.put("/update-resources/:id", updateResource);
router.delete("/delete-resources/:id", deleteResource);

export default router;
