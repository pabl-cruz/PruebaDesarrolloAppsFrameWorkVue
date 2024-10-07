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
  <h1>Componente Padre</h1>

  <h2 data-test="title">{{ textoTitulo }}</h2>
  <!--cargar componente hijo y evento emit con valor a funcion que traiga el valor a componente padre-->
  <ChildComponent @sentText="sentText" />
</template>
