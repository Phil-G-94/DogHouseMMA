/** @type {import('tailwindcss').Config} */

/*eslint-env node */
const plugin = require("tailwindcss/plugin");

const flipCard = plugin(function ({ addUtilities }) {
    addUtilities({
        ".rotate-y-180": {
            transform: "rotateY(180deg)",
        },

        ".preserve-3d": {
            transformStyle: "preserve-3d",
        },

        ".perspective": {
            perspective: "1000px",
        },

        ".backface-hidden": {
            backfaceVisibility: "hidden"
        },

    })
})

const validation = plugin(function ({ addUtilities }) {
    addUtilities({
        ".valid": {
            backgroundColor: "#86efac"

        },
        ".invalid": {
            backgroundColor: "#fda4af"
        }
    })
})

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [validation, flipCard, '@tailwindcss/forms'],
};
