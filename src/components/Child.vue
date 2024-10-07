<script setup>
import { ref, defineComponent, defineEmits } from 'vue'

//definir componente
defineComponent({
  name: 'ChildComponent'
})

//definir evento a emitir
const emit = defineEmits(['sentText'])

const textoTitulo = ref('')

//fijar funcion que emita evento y asigne el valor de textoTitulo del hijo al textoTitulo del componente padre
function sendText() {
  emit('sentText', { textoTitulo: textoTitulo.value })
}
</script>
<template>
  <h2>Componente Hijo</h2>
  <p>Ingrese un texto para comunicarlo al componente padre</p>
  <form @submit.prevent="sendText" data-test="form">
    <input
      type="text"
      name="text"
      v-model="textoTitulo"
      placeholder="Introducir texto"
      data-test="textInput"
    />
    <button type="submit">Enviar texto</button>
  </form>
</template>
