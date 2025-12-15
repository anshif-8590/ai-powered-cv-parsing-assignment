import Persona from "../models/Persona.js";

export const getAllPersonas = async (req, res) => {
    try {
        const personas = await Persona.find().sort({ createdAt: -1 });
        res.status(200).json(personas);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch personas",
            error: error.message,
        });
    }
};