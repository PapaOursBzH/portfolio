<template>
  <footer class="footer">
    <p>© {{ currentYear }} - Mis à jour le {{ updateDate }}</p>
    <div class="socials">
      <a href="https://github.com/PapaOursBzH" target="_blank" aria-label="GitHub">
        <Github :size="24" />
      </a>
      <a href="https://www.linkedin.com/in/papaoursbzh/" target="_blank" aria-label="LinkedIn">
        <Linkedin :size="24" />
      </a>
    </div>
  </footer>
</template>

<script setup>
import { Github, Linkedin } from 'lucide-vue-next'

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

.socials {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
}

.socials a {
  color: white;
  transition: transform 0.2s;
}

.socials a:hover {
  transform: scale(1.2);
}
</style>
