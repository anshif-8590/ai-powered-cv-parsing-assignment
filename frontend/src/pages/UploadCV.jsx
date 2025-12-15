import React from 'react'
import { useState } from "react";
import { uploadCV } from "../api/personaApi";
import { useNavigate } from "react-router-dom";



const UploadCV = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [persona, setPersona] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // ✅ REQUIRED

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a CV file");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await uploadCV(file);
      setPersona(data);

      // 🚀 REDIRECT TO PERSONA DETAIL PAGE
      navigate(`/personas/${data._id}`);

    } catch (err) {
      console.error(err);
      setError("Failed to generate persona");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-2">Upload CV</h1>

          <p className="text-gray-500 mb-6">
            Upload a CV to generate a professional persona
          </p>

          <input
            type="file"
            accept=".pdf"
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button
            onClick={handleUpload}
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Person"}
          </button>

          {/* ERROR MESSAGE */}
          {error && (
            <p className="mt-4 text-sm text-red-500">
              {error}
            </p>
          )}

          {/* OPTIONAL PREVIEW (won't show because we redirect immediately) */}
          {persona && (
            <div className="mt-6 border-t pt-4 text-sm text-gray-700">
              <h2 className="text-lg font-semibold">
                {persona.fullName}
              </h2>

              <p className="text-gray-500 mb-2">
                {persona.professionalHeading}
              </p>

              <p className="text-xs text-gray-400">
                Redirecting to full profile...
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default UploadCV
