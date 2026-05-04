// src/lib/physics-utils.ts

// Una función simple que queremos asegurar que nunca falle
export const calcularPuntajeFinal = (
  teoria: number,
  practica: number,
): number => {
  if (teoria < 0 || practica < 0) return 0;
  return teoria * 0.6 + practica * 0.4;
};
