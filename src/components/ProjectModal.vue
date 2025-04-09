<template>
    <div class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <button class="close" @click="close">×</button>
        <h2>{{ project.title }}</h2>
        <p><strong>Date :</strong> {{ project.date }}</p>
        <p><strong>Technos :</strong> {{ project.tech.join(', ') }}</p>
        <div class="links">
          <a :href="project.site" target="_blank">Voir le projet</a>
          <a v-if="project.repo" :href="project.repo" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps(['project'])
  const emit = defineEmits(['close'])
  const close = () => emit('close')
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: rgba(0,0,0,0.6);
    display: flex; justify-content: center; align-items: center;
    z-index: 1000;
  }
  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    position: relative;
    width: 90%;
    max-width: 500px;
  }
  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
  .links a {
    margin-right: 1rem;
    color: #0077cc;
    text-decoration: none;
  }
  </style>
  