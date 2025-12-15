import React from 'react'

const UploadCV = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-2">
            Upload CV
          </h1>
          <p className="text-gray-500 mb-6">
            Upload a CV to generate a professional persona
          </p>

          <input
            type="file"
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
          />

          <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
            Generate Persona
          </button>

          <div className="mt-6 text-sm text-gray-400 border-t pt-4">
            Persona preview will appear here
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadCV
