import React from 'react'
import { useParams } from "react-router-dom";
import { personas } from "../data/dummyPersona.js";


const PersonaDetail = () => {

    const { id } = useParams();
    const persona = personas.find((p) => p.id === id);

    if (!persona) return <div className="p-6">Persona not found</div>;
    return (
        <>
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="bg-white p-6 rounded shadow max-w-3xl mx-auto">
                    <h1 className="text-2xl font-semibold">
                        {persona.fullName}
                    </h1>
                    <p className="text-gray-500 mb-4">
                        {persona.professionalHeading}
                    </p>

                    <Section title="Experience Summary">
                        {persona.experienceSummary}
                    </Section>

                    <Section title="Skills">
                        {persona.skills.join(", ")}
                    </Section>

                    <Section title="Work Experience">
                        {persona.workExperience.map((w, i) => (
                            <p key={i}>
                                {w.role} – {w.company} ({w.duration})
                            </p>
                        ))}
                    </Section>

                    <Section title="Education">
                        {persona.education.map((e, i) => (
                            <p key={i}>
                                {e.degree}, {e.institution} ({e.year})
                            </p>
                        ))}
                    </Section>

                    <Section title="Hobbies">
                        {persona.hobbies.join(", ")}
                    </Section>
                </div>
            </div>
        </>
    )
}

export default PersonaDetail

function Section({ title, children }) {
    return (
        <div className="mb-4">
            <h2 className="font-medium mb-1">{title}</h2>
            <div className="text-sm text-gray-600">{children}</div>
        </div>
    );
}