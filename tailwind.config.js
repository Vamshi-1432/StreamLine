/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "rgb( 0 0 0 /40%)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
      },
      screens: {
        xs: "375px",
        xp: "390px",
        xrs: "412px",
        xr: "414px",
        xpp: "430px",
        mdAir: "820px",
        xlDell: "1080px",
        "2xlDell": "1375px",
      },
    },
  },
  plugins: [],
};
