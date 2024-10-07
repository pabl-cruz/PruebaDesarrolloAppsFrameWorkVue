<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <h1>Prueba de ejercicios de desarrollo de App front-end en Vue</h1>
    <div class="wrapper">
      <nav>
        <!--enlazar vistas-->
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/counter">Contador</RouterLink>
        <RouterLink to="/parentchild">Componentes Padre - Hijo</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
