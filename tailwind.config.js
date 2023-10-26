/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/components/header.jsx",
    "./src/components/footer.jsx",
    "./src/components/home-content.jsx",
    "./src/components/detail-content.jsx",
    "./src/components/form-input.jsx",
    "./src/components/form-update.jsx",
    "./src/components/table-event.jsx",
    "./src/components/contact-content.jsx",
    "./src/components/side-content.jsx",
    "./src/components/ai-box.jsx",
    "./src/pages/home-page.jsx",
    "./src/pages/login-page.jsx",
    "./src/pages/detail-event.jsx",
    "./src/pages/list-event-user.jsx",
    "./src/pages/input-event.jsx",
    "./src/pages/update-event.jsx",
    "./src/pages/contact-page.jsx",
    "node_modules/flowbite-react/lib/cjs/index.js",
    "node_modules/flowbite-react/lib/esm/index.js",

    "node_modules/flowbite-datepicker/dist/js/datepicker.min.js",
    "node_modules/flowbite-datepicker/js/main.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" },
      },
    },
    fontFamily: {
      body: ["Slabo 27px"],
      sans: ["Slabo 27px"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
