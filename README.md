# prueba-desarrolloAppsFrameworkVue

Repositorio de prueba evaluada del módulo 7 de Desarrollo de Apps en Framework Vue de bootcamp de Programación Front-end con Vue de Desafío Latam.

El build de producción alojado en Firebase Hosting se puede ver [acá](https://examen-m7-vue.web.app/).

## Extensiones de Vue utilizadas

    - Vue Router, para desarrollo en SPA (Single Page Aplication)
    - Pinia, para manejo de estado global
    - Vitest, para realizar pruebas unitarias

## Lenguajes y frameworks utilizados

    - HTML 5
    - CSS 3
    - JavaScript
    - Vue.js 3

## Carácteristicas

El examen consiste de 3 ejercicios, de los cuales 2 se pueden acceder en las vistas de la App:

    - 1. Manejo de estado con Pinia, utilizando un contador que aumenta y disminuye su valor mediante botones y pruebas unitarias para recibir un valor inicial en el contador, y probar sus funcionalidades de incremento y decremento.

    - 2. Navegación con Vue Router, se realizan vistas usando Vue Router y se hacen pruebas unitarias para comprobar existencia de componentes que manejan sus vistas respectivas.

    - 3. Comunicación entre componentes, se realiza una comunicación entre dos componentes Child y Parent para pasar una variable de titulo mostrada en el componente Parent, en el que se introduce su contenido en un formulario dentro del componente Child. Se realiza prueba de validación de envío de texto al hacer clic.

## Personalizar configuración

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Instalar dependencias de proyecto

```sh
npm install
```

### Compilar y recargar en caliente para desarrollo

```sh
npm run dev
```

### Compilar y minifcar proyecto para producción

```sh
npm run build
```

### Correr pruebas unitarias con [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint con [ESLint](https://eslint.org/)

```sh
npm run lint
```
