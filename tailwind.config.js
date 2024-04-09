/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      "co-blue-p": "#33478c",
      "co-blue-s": "#001970",
      "co-yellow-p": "#ffd100",
      "co-yellow-s": "#fff5cc",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('src/assets/ui-hero.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"],
  },
};
