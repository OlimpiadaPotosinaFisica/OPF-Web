// src/components/Boton.test.ts
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import * as cheerio from 'cheerio';
import Boton from './Boton.astro';

describe('Componente Boton.astro', () => {
  it('se renderiza correctamente con el texto esperado', async () => {
    // 1. Creamos el contenedor virtual de Astro
    const container = await AstroContainer.create();

    // 2. Renderizamos el componente. 
    const result = await container.renderToString(Boton, {
      props: { href: '/convocatoria' }, // Mantenemos el href si es un enlace
      slots: { default: 'Inscribirse' } // <--- Pasamos el texto como slot
    });
    
    // 3. Usamos Cheerio para analizar el HTML resultante
    const $ = cheerio.load(result);
    const botonElement = $('a'); 

    // 4. Hacemos las aserciones (las pruebas)
    expect(botonElement.text().trim()).toBe('Inscribirse');
    expect(botonElement.attr('href')).toBe('/convocatoria');
  });
});