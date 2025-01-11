import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "assets/chela1.png",
        "assets/chela2.png",
        "assets/chela3.png",
        "assets/chela4.png",
        "assets/gevpPadelLogo2.jpg",
        "assets/tenis2.webp",
        "assets/tenis1.png",
        "assets/tenis4.webp",
        "assets/tenis5.webp",
        "assets/tenis6.webp",
        "assets/tenis7.webp",
        "assets/tenis8.webp",
        "assets/tenisPlay1.png",
        "assets/tenisPlay2.png",
        "assets/padelFondo2.avif",
        "assets/padelFondo3.jpg",
        "assets/padelPlay.webp",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "GEVP APP",
        short_name: "GEVP APP",
        description:
          "Consulta o carga entrenamientos y eventos en el club GEVP.",
        theme_color: "#2c7a9e",
        background_color: "#2c7a9e",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "./assets/gevpLogo.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "./assets/gevpLogo.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "./assets/gevpLogo.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "maskable any",
          },
        ],
        orientation: "portrait",
      },
    }),
  ],
  build: {
    outDir: "dist", // o tu directorio de salida preferido
  },
  server: {
    open: true,
  },
});
