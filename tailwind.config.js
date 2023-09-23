/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        "pri-text": "#1A1919",
        "sec-text": "#757575",
        "job-text": "#474747",
        "job-ava-text": "#A3A3A3",
        "foot-text": "#FFFFFFB2",
        "app-job-bg": "#F4F4F4",
      },
    },
  },
  plugins: [require("daisyui")],
}

