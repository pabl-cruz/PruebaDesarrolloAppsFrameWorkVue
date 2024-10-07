<script setup></script>

<template>
  <ul>
    <li>
      <h3>Bienvenidos</h3>
      En esta página se pueden ver los 3 ejercicios indicados para el examen de desarrollo de apps
      en framework Vue. Haz clic en las secciones del navbar para ver los ejercicios.
    </li>
    <li>
      <h3>
        Ejercicio 1 - Contador Contador de números para aumentar y disminuir usando la store de
        Pinia.
      </h3>
      Haz clic en
      <strong>Contador</strong> para verlo en acción. Para las pruebas unitarias de este ejercicio,
      corre
      <pre>npm run test:unit</pre>
      en la terminal en los archivos <strong>Counter.spec.js</strong> en src/_test_/components y
      <strong>Counterview.spec.js</strong> en src/_test_/views
    </li>
    <li>
      <h3>Ejercicio 2 - Navegación con Vue Router</h3>
      Se utiliza el formato de vistas de Vue Router para navegar por los ejercicios y ver las vistas
      por defecto. En todas las vistas de la aplicación se realizan pruebas unitarias para validar
      la existencia de los componentes que las controlan.
      <br />
      <br />
      En la ruta src/_tests_/views estan los archivos de pruebas unitarias para ejecutarlas con el
      comando
      <pre>npm run test:unit</pre>
    </li>
    <li>
      <h3>Ejercicio 3 - Comunicación entre componentes</h3>
      Mediante el uso de emits, se realiza la comunicación entre el componente
      <strong>Child</strong> con <strong>Parent</strong> mediante el traspaso del valor de un titulo
      escrito en un formulario. Puedes verlo en acción haciendo clic en
      <strong>Comunicación Componentes</strong> en la navbar.
      <br />
      <br />
      En la ruta src/_tests_/views, en el archivo <strong>ParentChildView.spec.js</strong> se pueden
      encontrar las pruebas unitarias para validar el traspaso de un texto al hacer click en el
      boton de carga. Se ejecuta el comando
      <pre>npm run test:unit</pre>
      para correr las pruebas.
    </li>
    <li>
      <h3>Subido a Firebase Hosting</h3>
      Si logras ver esta página, significa que hice un build de producción e hice el deployment para
      subirlo a Firebase Hosting para verlo desde la nube en cualquier navegador. :D
    </li>
  </ul>
</template>
<style scoped>
li {
  margin: 2rem 0;
}
</style>
