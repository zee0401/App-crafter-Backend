import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ["Article", "Video", "Tutorial"],
            required: true,
        },
    },
    { timestamps: true }
);

const Resource = mongoose.model("Resource", resourceSchema);

export default Resource;
