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
        "assets/chela1.webp",
        "assets/chela2.webp",
        "assets/chela3.webp",
        "assets/chela4.webp",
        "assets/gevpPadelLogo2.webp",
        "assets/padel1.webp",
        "assets/padel2.webp",
        "assets/padel3.webp",
        "assets/padel4.webp",
        "assets/padel5.webp",
        "assets/padel6.webp",
        "assets/padelFondo.webp",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "Padel GEVP",
        short_name: "Padel GEVP",
        description:
          "Reserva tu cancha de pádel en GEVP de forma rápida y sencilla. Vení a disfrutar del mejor pádel con amigos y viví la experiencia en nuestras instalaciones. ¡Te esperamos!",
        theme_color: "black",
        background_color: "black",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "./assets/gevpPadelLogo2.webp",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "./assets/gevpPadelLogo2.webp",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "./assets/gevpPadelLogo2.webp",
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
