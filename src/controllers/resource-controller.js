import Resource from "../models/resource-model.js";

export const createResource = async (req, res) => {
    try {
        const { title, description, type } = req.body;

        console.log(title, description, type);

        if (!title || !description || !type) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        if (type !== "Article" && type !== "Video" && type !== "Tutorial") {
            return res.status(400).json({
                message: "Invalid resource type",
            });
        }

        const resource = new Resource({ title, description, type });
        await resource.save();

        res.status(201).json({
            message: "Resource created successfully",
            resource,
        });
    } catch (error) {
        console.error("Error creating resource:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

export const getAllResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        res.status(200).json({
            message: "Resources found successfully",
            resources,
        });
    } catch (error) {
        console.error("Error fetching resources:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

export const getResourceById = async (req, res) => {
    try {
        const { id } = req.params;
        const resource = await Resource.findById(id);

        if (!resource) {
            return res.status(404).json({ message: "Resource not found" });
        }

        res.status(200).json({
            message: "Resource found successfully",
            resource,
        });
    } catch (error) {
        console.error("Error fetching resource by ID:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

export const updateResource = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, type } = req.body;
        console.log(title, description, type);

        if (!title || !description || !type) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const resource = await Resource.findByIdAndUpdate(
            id,
            { title, description, type },
            { new: true }
        );

        if (!resource) {
            return res.status(404).json({ message: "Resource not found" });
        }

        res.status(200).json({
            message: "Resource updated successfully",
            resource,
        });
    } catch (error) {
        console.error("Error updating resource:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

export const deleteResource = async (req, res) => {
    try {
        const { id } = req.params;
        const resource = await Resource.findByIdAndDelete(id);

        if (!resource) {
            return res.status(404).json({ message: "Resource not found" });
        }

        res.status(200).json({ message: "Resource deleted successfully" });
    } catch (error) {
        console.error("Error deleting resource:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};
