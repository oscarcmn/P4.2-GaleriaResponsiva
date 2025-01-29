import sharp from "sharp";
import { existsSync, mkdirSync, readdirSync } from "fs";
import { join, parse } from "path";

// Carpetas de entrada y salida
const inputFolder = "./input/";
const outputFolder = "./output-adv/";

// Definir tamaños y densidades
const sizes = {
  small: 320,
  medium: 640,
  large: 1280,
  xlarge: 1920,
};
const densities = ["1x", "2x"];

// Crear la carpeta de salida si no existe
if (!existsSync(outputFolder)) {
  mkdirSync(outputFolder, { recursive: true });
}

// Procesar las imágenes de la carpeta de entrada
readdirSync(inputFolder).forEach((file) => {
  const inputFile = join(inputFolder, file);

  // Comprobar que es un archivo de imagen válido
  if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
    Object.entries(sizes).forEach(([label, width]) => {
      densities.forEach((density) => {
        const scaleFactor = density === "2x" ? 2 : 1;
        const resizedWidth = width * scaleFactor;

        // Generar el nombre del archivo de salida
        const outputFileName = `${parse(file).name}-${label}-${density}.${
          parse(file).ext
        }`;
        const outputFile = join(outputFolder, outputFileName);

        // Redimensionar la imagen
        sharp(inputFile)
          .resize(resizedWidth)
          .toFile(outputFile)
          .then(() => {
            console.log(`Generada: ${outputFile}`);
          })
          .catch((err) => {
            console.error(`Error procesando ${file}: ${err}`);
          });
      });
    });
  }
});
