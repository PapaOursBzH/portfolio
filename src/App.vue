<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: #f5f5f5;
  color: #333;
}
main {
  padding: 2rem;
}
</style>
<img src="/logo.png" alt="test logo" width="100" />