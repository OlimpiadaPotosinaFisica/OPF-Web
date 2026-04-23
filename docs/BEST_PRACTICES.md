Las siguentes se tiene que tomar mas como recomendaciones que como reglas, sin embargo actualmente el que tiene 
permisos de aceptar el codigo al proyecto es la misma persona que escribio estas "recomendaciones".

# Commits

- Mensajes claros: Cuando hagas commits el mensage tiene que ser corto, claro y descriptivo. Una buena guia para 
hacer descripciones de commits es: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

- Un commit por cambio: Cada commit deberia solo tener tu codigo relacionados a un cambio, ya sea un nuevo component,
una nueva forma de hacer algo o un simple cambio de nombre de variable. Mientras mas especifico sea cada commit es mas
facil revisarlo y entender como el code base se conecta.

# Colaboracion

- Issue y Pull request: Si sabes de algo que se necesite hacer, agrega un issue explicando lo que hay que hacer.
Si quieres ayudar revisa la lista de issue y trabaja en ello, puedes agregar mensajes con propuestas o llamados de 
pertenencia.

- Fetch y Pull: Cada vez que vayas a trabajar en el codigo haz fetch y pull para traer los cambios que los demas 
han hecho al repo, esto evita conflictos y repeticiones. Trabaja con los demas en mente.

- Documentación: Si agregas lógica compleja o tu código requiere más que nombres claros en las variables,
agrega comentarios. Si estos se vuelven muy extensos, considera mover tus explicaciones a un archivo nuevo
o ya existente en la carpeta docs/.

# Components

- Primero componentes, luego componentes y al final componentes: Cuando agregues contenido a la página, haz un esfuerzo.
Primero revisa si para la estructura que estás añadiendo podrías usar un componente que ya esté definido;
en caso afirmativo, ¡úsalo! Luego piensa si podrías agregar características o lógica a un componente ya existente
para crear la estructura que estás agregando; en caso afirmativo, ¡úsalo! Si aún así no es posible,
piensa si lo que estás haciendo podría ser un componente del cual los demás, o tú en el futuro, se beneficiarían;
en caso afirmativo, ¡hazlo! Si todo falla, haz lo que quieras.
