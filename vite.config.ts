import { defineConfig } from "vite";
import vinext from "vinext";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/solarParck/" : "/",
  plugins: [vinext()],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
