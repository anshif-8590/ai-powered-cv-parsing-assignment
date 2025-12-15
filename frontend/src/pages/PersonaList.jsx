import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllPersonas } from "../api/personaApi";

const PersonaList = () => {
    const [personas, setPersonas] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getAllPersonas()
            .then(setPersonas)
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <p className="p-6">Loading...</p>;
    }

    return (
        <>
            <div className="max-w-3xl mx-auto p-6">
                {/* HEADER + ACTION */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Personas</h1>

                    {/* ➕ GENERATE BUTTON */}
                    <button
                        onClick={() => navigate("/upload")}
                        className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800"
                    >
                        Generate New Persona
                    </button>
                </div>

                {/* EMPTY STATE */}
                {personas.length === 0 && (
                    <p className="text-gray-500">
                        No personas created yet.
                    </p>
                )}

                {/* PERSONA LIST */}
                {personas.map((p) => (
                    <Link
                        key={p._id}
                        to={`/personas/${p._id}`}
                        className="block border rounded p-4 mb-4 hover:bg-gray-50 transition"
                    >
                        <h2 className="font-semibold">
                            {p.fullName}
                        </h2>

                        <p className="text-sm text-gray-600">
                            {p.professionalHeading}
                        </p>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default PersonaList
