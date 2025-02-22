import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Izinkan akses dari luar
    port: 5173, // Port default Vite
    strictPort: true,
    cors: true, // Izinkan permintaan lintas domain
    hmr: {
      clientPort: 443, // Agar Hot Module Reload (HMR) tetap berfungsi di HTTPS Ngrok
    },
    allowedHosts: [
      "26a1-103-81-221-61.ngrok-free.app", // Ganti dengan domain Ngrok yang diberikan
    ],
  },
  preview: {
    allowedHosts: [
      "26a1-103-81-221-61.ngrok-free.app", // Ganti dengan domain Ngrok yang diberikan
    ],
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "My PWA App",
        short_name: "PWA App",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#317EFB",
        icons: [
          {
            src: "/cropped.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "/shop.png",
            sizes: "1200x800",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/shop_mob.png",
            sizes: "540x720",
            type: "image/png",
            form_factor: "narrow",
          },
        ],
      },
    }),
  ],
});
