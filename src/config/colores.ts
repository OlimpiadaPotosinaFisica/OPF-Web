export const colores = {
  naranja: "#B85025",
  verde: "#2A5C35",
  azulUaslp: "#23498C",
  azul: "#1F6BED",
  dorado: "#C8960C",
  crema: "#F7F5EF",
  negro: "#1A1A1A",
  gris: "#DEDAD4",
  blanco: "#FFFFFF",
} as const;

export type Color = keyof typeof colores;
