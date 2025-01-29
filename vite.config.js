import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    root: "", // Cambia la raíz del proyecto a "src"
    outDir: "docs", // Cambia el directorio de salida
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  base: "/P4.2-GaleriaResponsiva/",
});
