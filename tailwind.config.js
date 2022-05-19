module.exports = {
    mode: 'jit',
    theme: {
        extend: {},
    },
    plugins: [require("tailwind-scrollbar-hide")],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
}