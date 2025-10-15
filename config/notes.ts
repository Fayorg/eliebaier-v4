import CS101Background from "@/app/(front)/notes/backgrounds/cs-101";
import Math101Background from "@/app/(front)/notes/backgrounds/math-101";
import Math111Background from "@/app/(front)/notes/backgrounds/math-111";

// Config related to the notes page
export const NOTES_REPO_URL = 'https://github.com/fayorg/epfl-notes';

export const CLASSES = [
    {
        name: "Advanced Information, Computation, Communication I",
        code: "CS-101",
        semester: "BA 1",
        ects: 0,
        background: CS101Background
    },
    {
        name: "Analysis I",
        code: "MATH-101",
        semester: "BA 1",
        ects: 0,
        background: Math101Background
    },
    {
        name: "Linear Algebra I",
        code: "MATH-111",
        semester: "BA 1",
        ects: 0,
        background: Math111Background
    }
]