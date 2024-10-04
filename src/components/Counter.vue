<script setup>
import { defineComponent } from 'vue'
import { useCounterStore } from '@/stores/counter'
//definir componente
defineComponent({
  name: 'CounterComponent'
})

const store = useCounterStore()
</script>

<template>
  <div>
    <h2>Ejercicio 1 - Contador</h2>
    <p id="counterHTML">{{ store.count }}</p>
    <div>
      <button @click="store.increment" id="increase">Incrementar Contador</button>
      <button @click="store.decrement" id="decrease">Disminuir Contador</button>
    </div>
  </div>
</template>
