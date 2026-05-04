# Base de datos

Este documento detalla la arquitectura de la base de datos, las configuraciones de seguridad y los pasos de despliegue para el módulo de resultados de la Olimpiada Potosina de Física (OPF).

## Arquitectura de la Base de Datos

La información de los participantes se gestiona a través de una base de datos alojada en Supabase. Toda la información pública vive en una sola tabla.

### Tabla: `OPF Resultados`

| Columna | Tipo de Dato | Configuración | Descripción |
| :--- | :--- | :--- | :--- |
| **`id`** | `int8` | **Primary Key**, Is Identity | Autoincremental. Identificador único de cada registro. No requiere captura manual. |
| **`nombre`** | `text` | Is Nullable: `false` | Nombre completo del participante. No es único. |
| **`escuela`** | `text` | Is Nullable: `false` | Nombre de la institución educativa. |
| **`cal`** | `numeric` | Is Nullable: `false` | Calificación final obtenida en la prueba. |

### Ajustes de la Tabla
- **Enable Row Level Security (RLS):** **Activado**. Previene el acceso no autorizado a nivel de fila.
- **Enable Realtime:** **Desactivado**. No se requiere conexión por web-sockets, ahorra recursos.
- **Data API Access:** **Activado**. Abre el endpoint RESTful para que la librería `@supabase/supabase-js` pueda consultar la tabla.

---

## Seguridad y Políticas

Para garantizar que nadie pueda alterar los resultados o vulnerar la base de datos desde internet, se aplicaron configuraciones estrictas.

### Política de Lectura Pública
Se creó una política que permite únicamente la lectura de la tabla para construir la página estática:
- **Operación:** `SELECT`
- **Roles:** `public`, `anon`

Cualquier usuario puede solicitar los datos (`true`), pero nadie puede ejecutar `INSERT`, `UPDATE` o `DELETE` desde la API pública.

## Variables de Entorno
El proyecto de Astro requiere credenciales para conectarse a Supabase. Por seguridad, las llaves de producción NUNCA deben subirse al repositorio.

El archivo .env es local y debe estar listado en el archivo .gitignore. Contiene:

```
SUPABASE_URL=https://[TU_PROYECTO].supabase.co
SUPABASE_ANON_KEY=[TU_LLAVE_ANON_AQUI]
```

## Despliegue a GitHub Pages
Dado que la página se publica en GitHub Pages, el proceso de compilación a través de GitHub Actions requiere conocer las credenciales para extraer los datos de Supabase durante el "build".

### Paso 1: Configurar Secretos en GitHub
En la configuración del repositorio `(Settings > Secrets and variables > Actions)`, se deben registrar dos secretos:

`SUPABASE_URL`

`SUPABASE_ANON_KEY`

### Paso 2: Archivo de Workflow
El archivo `.github/workflows/deploy.yml` debe inyectar estos secretos en el paso de construcción de Astro:

```
        uses: withastro/action@v6
        env:
          SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY }}
```
## Colaboración
Para delegar la captura de calificaciones a coordinadores:

Invitar colaboradores desde el panel de Supabase: `Organization Settings > Team > Invite`.

Rol a asignar: `Developer`.

**Advertencia:** NO asignar el rol `Administrator` a menos que sea un co-propietario, ya que permite borrar el proyecto.