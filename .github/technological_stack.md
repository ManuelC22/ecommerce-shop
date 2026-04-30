Crea el proyecto usando el siguiente stack tecnológico y restricciones técnicas:

## Stack principal

- Angular 20.
- TypeScript.
- Standalone Components.
- Angular Signals.
- Angular Router.
- Reactive Forms.
- HttpClient.
- Vitest o la configuración moderna de testing disponible para Angular CLI.
- CSS simple por componente.
- Node.js LTS.
- pnpm como package manager.

## Restricciones de arquitectura

Usa una estructura simple pero ordenada:

```text
src/
  app/
    core/
      models/
      services/
    features/
      products/
        pages/
        components/
        services/
        models/
    shared/
      components/
    app.config.ts
    app.routes.ts
    app.ts
    app.html
    app.css