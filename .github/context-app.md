Actúa como un Senior Frontend Architect experto en Angular 20, buenas prácticas, mantenibilidad, testing y formación de desarrolladores junior.

Necesito que me ayudes a crear un proyecto dummy llamado `bug-tracker-shop`, cuyo objetivo principal NO es ser una aplicación perfecta, sino una aplicación de entrenamiento para que un desarrollador junior aprenda a diagnosticar, corregir y prevenir bugs en Angular.

El desarrollador que usará este proyecto está empezando a estudiar Angular 20 y su función principal en el equipo será solucionar bugs. Por eso, el proyecto debe estar diseñado con errores intencionales, progresivos y controlados.

La aplicación debe simular un pequeño catálogo de productos con funcionalidades como:

- Listado de productos.
- Filtro por nombre.
- Filtro por disponibilidad.
- Tarjetas de producto.
- Detalle de producto.
- Formulario de creación y edición.
- Servicio de productos.
- Simulación de consumo HTTP.
- Estados de carga, error, vacío y éxito.
- Pruebas unitarias básicas.

El proyecto debe dividirse por días de entrenamiento. Cada día debe introducir funcionalidades nuevas y también bugs intencionales que el desarrollador deberá corregir.

Reglas importantes:

1. No corrijas los bugs intencionales.
2. Los bugs deben estar presentes en el código.
3. Los bugs deben ser realistas para un desarrollador junior.
4. Cada bug debe poder reproducirse manualmente.
5. Cada día debe dejar una versión funcional parcialmente, pero con errores concretos.
6. El código debe ser entendible para un junior, pero suficientemente realista.
7. Usa Angular 20 con componentes standalone.
8. Usa control flow moderno con `@if`, `@else`, `@for` y `@empty`.
9. Usa signals donde corresponda.
10. Usa formularios reactivos para la parte de formularios.
11. Usa servicios para separar lógica de negocio.
12. Usa pruebas unitarias básicas.
13. No uses NgModules.
14. No uses librerías externas innecesarias.
15. El objetivo es entrenamiento en debugging, no diseño visual avanzado.

El proyecto debe permitir que el mentor revise diariamente:

- Qué bugs existen.
- Cómo se reproducen.
- Qué archivos están afectados.
- Qué debería corregir el desarrollador.
- Qué criterios de aceptación debe cumplir al finalizar cada día.

Cuando generes código, incluye nombres claros, estructura limpia y errores intencionales bien distribuidos.