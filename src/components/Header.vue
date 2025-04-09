<template>
  <header class="header">
    <div class="header-content">
      <img src="/public/logo.png" alt="Logo" class="logo" />
      <h1 class="title">Bienvenue chez moi</h1>
    </div>
    <nav class="nav">
      <router-link to="/presentation">Présentation</router-link>
      <router-link to="/creations">Créations</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #d8dbdb;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  position: relative;
}

.logo {
  height: 60px;
  position: absolute;
  left: 0;
}

.title {
  flex: 1;
  text-align: center;
  font-size: 2rem;
  margin: 0;
}

.nav {
  margin-top: 1rem;
  display: flex;
  gap: 2rem; /* espace entre les liens */
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.nav a:hover {
  text-decoration: underline;
}
</style>
