import OpenAI from "openai";

export const parseCVWithAI = async (cvText) => {


  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = `
Extract candidate details from the CV text below.

Return the data STRICTLY in JSON format using this structure.
If a field is missing, use an empty string or empty array.

{
  "fullName": "",
  "email": "",
  "phone": "",
  "location": "",
  "professionalHeading": "",
  "idealJobTitles": [],
  "experienceSummary": "",
  "skills": [],
  "education": [],
  "workExperience": [],
  "hobbies": []
}

CV TEXT:
${cvText}
`;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0,


      response_format: { type: "json_object" },
    });


    return JSON.parse(response.choices[0].message.content);
  } catch (error) {
    console.error("AI CLIENT ERROR:", error);
    throw new Error("AI data parsing failed");
  }
};
