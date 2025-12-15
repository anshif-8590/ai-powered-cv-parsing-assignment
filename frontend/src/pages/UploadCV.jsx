import React from 'react'

const UploadCV = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
          <h1 className="text-xl font-semibold mb-2">
            Upload CV
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Upload a CV to generate a persona
          </p>

          <input
            type="file"
            className="w-full border rounded p-2 mb-4"
          />

          <button className="w-full bg-black text-white py-2 rounded">
            Generate Persona
          </button>

          <div className="mt-4 text-sm text-gray-400">
            Persona preview will appear here
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadCV
