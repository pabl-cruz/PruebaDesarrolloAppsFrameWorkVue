<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="title-container">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="70" height="70" />
      <h1>Prueba de ejercicios de desarrollo de App front-end en Vue</h1>
    </div>
    <div class="wrapper">
      <nav>
        <!--enlazar vistas-->
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/counter">Contador</RouterLink>
        <RouterLink to="/parentchild">Comunicación Componentes</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: 85%;
  margin: auto;
}

.title-container {
  display: flex;
  margin-bottom: 1rem;
}

h1 {
  margin-left: 3rem;
}
.wrapper {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1.5rem;
}

.wrapper nav > a {
  margin: 0 1.5rem;
}
</style>
