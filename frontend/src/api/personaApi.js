import api from "./axios";

// Upload CV
export const uploadCV = async (file) => {
  const formData = new FormData();
  formData.append("cv", file);

  const response = await api.post("/upload-cv", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Get all personas
export const getAllPersonas = async () => {
  const response = await api.get("/personas");
  return response.data;
};

// Get persona by ID
export const getPersonaById = async (id) => {
  const response = await api.get(`/personas/${id}`);
  return response.data;
};
