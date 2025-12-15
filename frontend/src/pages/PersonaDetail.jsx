import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPersonaById } from "../api/personaApi";


const PersonaDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [persona, setPersona] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPersonaById(id)
            .then(setPersona)
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <p className="p-6">Loading...</p>;
    }

    if (!persona) {
        return <p className="p-6 text-red-500">Persona not found</p>;
    }

    return (
        <>
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="bg-white p-6 rounded shadow max-w-3xl mx-auto">

                    {/* 🔙 BACK TO LIST */}
                    <button
                        onClick={() => navigate("/personas")}
                        className="mb-4 px-3 py-1.5 text-sm text-white bg-black border rounded hover:bg-gray-700"
                    >
                        ← Back to all personas
                    </button>

                    {/* HEADER */}
                    <h1 className="text-2xl font-semibold">
                        {persona.fullName}
                    </h1>

                    <p className="text-gray-500 mb-6">
                        {persona.professionalHeading}
                    </p>

                    {/* EXPERIENCE SUMMARY */}
                    {persona.experienceSummary && (
                        <Section title="Experience Summary">
                            {persona.experienceSummary}
                        </Section>
                    )}

                    {/* SKILLS */}
                    {persona.skills?.length > 0 && (
                        <Section title="Skills">
                            <div className="flex flex-wrap gap-2">
                                {persona.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-200 px-2 py-1 rounded text-xs"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Section>
                    )}

                    {/* WORK EXPERIENCE */}
                    {persona.workExperience?.length > 0 && (
                        <Section title="Work Experience">
                            {persona.workExperience.map((w, i) => (
                                <div key={i} className="mb-3">
                                    <p className="font-medium">
                                        {w.jobTitle || w.role || "Role not specified"}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {w.company}
                                        {w.duration && ` • ${w.duration}`}
                                    </p>
                                </div>
                            ))}
                        </Section>
                    )}

                    {/* EDUCATION */}
                    {persona.education?.length > 0 && (
                        <Section title="Education">
                            {persona.education.map((e, i) => (
                                <p key={i}>
                                    {typeof e === "string"
                                        ? e
                                        : `${e.degree || ""} ${e.institution || ""} ${e.year || ""}`}
                                </p>
                            ))}
                        </Section>
                    )}

                    {/* HOBBIES */}
                    {persona.hobbies?.length > 0 && (
                        <Section title="Hobbies">
                            {persona.hobbies.join(", ")}
                        </Section>
                    )}
                </div>
            </div>
        </>
    )
}

export default PersonaDetail

function Section({ title, children }) {
    return (
        <div className="mb-5">
            <h2 className="font-medium mb-2">{title}</h2>
            <div className="text-sm text-gray-700">
                {children}
            </div>
        </div>
    );
}