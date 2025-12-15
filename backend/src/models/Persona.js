import mongoose from "mongoose"

const personaSchema = new mongoose.Schema(
    {
        fullName: String,
        email: String,
        phone: String,
        location: String,

        professionalHeading: String,
        idealJobTitles: [String],
        experienceSummary: String,

        skills: [String],
        hobbies: [String],

        education: [[String]],

        workExperience: [
            {
                role: String,
                company: String,
                duration: String,
                description: String,
            },
        ],
    },
    {
         timestamps: true 
    }
)

const Persona = mongoose.model("Persona",personaSchema)
export default Persona