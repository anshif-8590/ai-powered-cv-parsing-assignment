import Persona from "../models/Persona.js";
import { parseCVWithAI } from "../utils/aiClient.js";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

export const uploadCV = async (req, res) => {
    try {
        const data = req.file
        if (!data) {
            return res.status(400).json({ message: "CV is not uploaded" });
        }

        let cvText = "";


        if (data.mimetype === "application/pdf") {
            const loadingTask = pdfjsLib.getDocument({
                data: new Uint8Array(data.buffer),
            });

            const pdf = await loadingTask.promise;

            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const content = await page.getTextContent();

                const pageText = content.items
                    .map((item) => item.str)
                    .join(" ");

                cvText += pageText + "\n";
            }
        } else {
            cvText = data.buffer.toString("utf-8");
        }

        if (!cvText || cvText.length < 50) {
            return res.status(400).json({
                message: "Unable to extract readable text from CV",
            });
        }

        const personaData = await parseCVWithAI(cvText);

        const savedPersona = await Persona.create(personaData);
        return res.status(201).json(savedPersona);

    } catch (error) {
        console.error("UPLOAD CV ERROR:", error);
        return res.status(500).json({
            message: "CV parsing failed",
            error: error.message,
        });
    }
};
