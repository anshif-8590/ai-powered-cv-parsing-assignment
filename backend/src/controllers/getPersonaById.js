import Persona from "../models/Persona.js";


export const getPersonaById = async (req, res) => {
    try {
        const persona = await Persona.findById(req.params.id);

        if (!persona) {
            return res.status(404).json({ message: "Persona not found" });
        }

        res.status(200).json(persona);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch persona",
            error: error.message,
        });
    }
};