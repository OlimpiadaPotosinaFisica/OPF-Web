// src/lib/physics-utils.test.ts
console.log("¿Qué es esto?:", calcularPuntajeFinal);
import { describe, it, expect } from "vitest";
import { calcularPuntajeFinal } from "./physics-utils.ts";

describe("Lógica de puntajes de la Olimpiada", () => {
  it("debería calcular correctamente el promedio ponderado", () => {
    const resultado = calcularPuntajeFinal(100, 100);
    expect(resultado).toBe(100);

    const resultadoMix = calcularPuntajeFinal(80, 40);
    // (80 * 0.6) + (40 * 0.4) = 48 + 16 = 64
    expect(resultadoMix).toBe(64);
  });

  it("debería retornar 0 si los valores son negativos", () => {
    expect(calcularPuntajeFinal(-10, 50)).toBe(0);
  });
});
