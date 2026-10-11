# Carlos Tarré · Portfolio

Portfolio personal de desarrollo web, con foco en backend y proyectos full stack.

**[Visitar el portfolio](https://carlostarvil.github.io/Portfolio/)**

## Proyectos

- **NexBite:** plataforma de pedidos a domicilio y recogida. React, Node.js, GraphQL, PostgreSQL y Stripe. La ficha enlaza a la rama de desarrollo y su documentación.
- **Yepsy:** comercio electrónico con React y Spring Boot.
- **Ticket Booking API:** API de eventos y entradas con Java y Spring Boot.
- **Nike Store:** tienda de aprendizaje con Angular, Express y MySQL.
- **FireplayGames:** catálogo de videojuegos con Next.js, TypeScript y Firebase.

Cada ficha permite explorar el proyecto, sus decisiones técnicas y las capturas de pantalla.

## Desarrollo local

Sitio estático con HTML, CSS y JavaScript, compatible con GitHub Pages. No requiere instalar paquetes de npm.

Abre la carpeta en VS Code y utiliza un servidor estático, como Live Server. También puedes ejecutarlo con Python:

```sh
python -m http.server 5500
```

Abre http://localhost:5500/.

## Editar contenido

| Archivo                              | Contenido                                                             |
| ------------------------------------ | --------------------------------------------------------------------- |
| [index.html](index.html)             | Presentación, proyectos, tecnologías, contacto y metadatos            |
| [css/styles.css](css/styles.css)     | Diseño, tamaños, adaptación a móvil y animaciones                     |
| [js/main.js](js/main.js)             | Datos de las fichas, galerías, filtros, navegación y copia del correo |
| [assets/projects/](assets/projects/) | Capturas de NexBite                                                   |
| [images/](images/)                   | Retrato y capturas de los proyectos anteriores                        |
| [assets/fonts/](assets/fonts/)       | Fuente DM Sans y su licencia                                          |

Los datos extendidos de cada proyecto están en el objeto **projects** de **js/main.js**. Para añadir un proyecto, incorpora también su tarjeta en **index.html**.

Los enlaces y recursos utilizan rutas relativas para funcionar bajo **/Portfolio/** en GitHub Pages. El archivo **.nojekyll** permite servirlos como archivos estáticos.

## Capturas de NexBite

Las tres capturas muestran la interfaz de cliente, el catálogo de un local y el espacio del vendedor de NexBite, a partir de la versión **84b424e96137af7d8e830c48c861a6c17685e74c**.

Se capturaron con datos de demostración: los nombres de locales, productos, direcciones y valoraciones ilustran la interfaz. No representan comercios reales ni compras reales.

Fotografías de demostración utilizadas dentro de estas capturas: [interior de un restaurante](https://images.unsplash.com/photo-1517248135467-4c7edcad34c4), [pizza](https://images.unsplash.com/photo-1513104890138-7c749659a591), [hamburguesa](https://images.unsplash.com/photo-1568901346375-23c9450c58cd) y [ensalada](https://images.unsplash.com/photo-1512621776951-a57141f2eefd), de Unsplash.

## Accesibilidad

Navegación con teclado, enlace para saltar al contenido, filtros con estado accesible, diálogos nativos con restauración del foco y respeto por la preferencia de movimiento reducido.

Los enlaces al código y el contenido principal siguen disponibles sin JavaScript.

## Tipografía

DM Sans se sirve desde el propio repositorio. Su licencia SIL Open Font License se conserva en [OFL-DM-Sans.txt](assets/fonts/OFL-DM-Sans.txt).
