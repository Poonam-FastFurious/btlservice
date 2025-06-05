const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  purge: [
    "src/Components/Liftbrand/Liftbrand.jsx",
    "/src/Components/Liftbrand/Card.jsx",
    "/src/Components/RoadBranding/Roadbranding.jsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/path/to/your/image.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
});
