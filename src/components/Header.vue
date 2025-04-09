<template>
  <header class="header">
    <div class="header-content">
      <!-- Logo cliquable -->
      <router-link to="/" class="logo-link">
        <img src="/logo.png" alt="Logo" class="logo" />
      </router-link>
      <h1 class="title">La Tannière</h1>
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

.logo-link {
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
}

.logo {
  height: 60px;
  cursor: pointer;
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
  gap: 2rem;
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
