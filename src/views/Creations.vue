<template>
    <section id="creations">
      <h3>Mes créations</h3>
      <div class="grid">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
          @open="openModal"
        />
      </div>
      <ProjectModal v-if="selectedProject" :project="selectedProject" @close="closeModal" />
    </section>
  </template>
  
  <script setup>
  import logoportfolio from '@/assets/logoportfolio.png'
  import cv from '@/assets/CV.jpg'
  import ProjectCard from '@/components/ProjectCard.vue'
  import ProjectModal from '@/components/ProjectModal.vue'
  import { ref } from 'vue'
  
  const projects = [
  {
    title: 'Projet Portfolio',
    image: logoportfolio,
    date: 'Avril 2025',
    tech: ['HTML', 'CSS', 'Vue.js'],
    site: 'https://papaoursbzh.github.io/portfolio/#/presentation',
    repo: 'https://github.com/PapaOursBzH/portfolio'
  },
  {
    title: 'Mon CV',
    image: cv,
    date: 'Février 2025',
    tech: ['HTML', 'CSS'],
    site: 'https://papaoursbzh.github.io/',
    repo: 'https://github.com/PapaOursBzH/papaoursbzh.github.io'
  },

  {
    title: 'Cours Dynamiser un espace commentaire',
    image: logoportfolio,
    date: 'Mars 2025',
    tech: ['HTML', 'CSS'],
    repo: 'https://github.com/PapaOursBzH/DynamiserUnEspaceDeCommentaires_DocumentsDevoir'
  }
]
  
  const selectedProject = ref(null)
  const openModal = (project) => selectedProject.value = project
  const closeModal = () => selectedProject.value = null
  </script>
  
  <style scoped>
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  #creations h3 {
  text-align: center;

}
  </style>
  