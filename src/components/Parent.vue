<script setup>
import { defineComponent, ref } from 'vue'
import ChildComponent from './Child.vue'

defineComponent({
  name: 'ParentComponent'
})

const textoTitulo = ref('')

function sentText(text) {
  textoTitulo.value = text.textoTitulo
}
</script>

<template>
  <h2>Ejercicio 3 - Comunicación componente hijo-padre</h2>

  <div>
    <h2>Componente Padre</h2>
    <h3 data-test="title">{{ textoTitulo }}</h3>
  </div>
  <!--cargar componente hijo y evento emit con valor a funcion que traiga el valor a componente padre-->
  <ChildComponent @sentText="sentText" />
</template>

<style scoped>
div {
  margin: 3rem 0 5rem 0;
}
</style>
