import React from 'react'
import { Link } from "react-router-dom";
import { personas } from "../data/dummyPersona.js";

const PersonaList = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-50 p-6">
                <h1 className="text-xl font-semibold mb-4">Personas</h1>

                <div className="space-y-3">
                    {personas.map((p) => (
                        <div
                            key={p.id}
                            className="bg-white p-4 rounded shadow flex justify-between items-center"
                        >
                            <div>
                                <p className="font-medium">{p.fullName}</p>
                                <p className="text-sm text-gray-500">
                                    {p.idealJobTitles.join(", ")}
                                </p>
                                <p className="text-xs text-gray-400">
                                    Created: {p.createdAt}
                                </p>
                            </div>

                            <Link
                                to={`/personas/${p.id}`}
                                className="text-sm text-blue-600"
                            >
                                View
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PersonaList
