<script setup>
import AboutComponent from '@/components/AboutComponent.vue'
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <AboutComponent />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
}
</style>
