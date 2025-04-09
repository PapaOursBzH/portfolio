<template>
  <footer class="footer">
    <p>© {{ currentYear }} - Mis à jour le {{ updateDate }}</p>
    <div class="socials">
      <a href="https://github.com" target="_blank">GitHub</a>
      <a href="https://linkedin.com" target="_blank">LinkedIn</a>
    </div>
  </footer>
</template>

<script setup>
const updateDate = new Date().toLocaleDateString()
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: #73b9ea;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 3rem;
}
.socials a {
  margin: 0 0.5rem;
  color: white;
  text-decoration: none;
}
.socials a:hover {
  text-decoration: underline;
}
</style>
