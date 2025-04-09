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
  import ProjectCard from '@/components/ProjectCard.vue'
  import ProjectModal from '@/components/ProjectModal.vue'
  import { ref } from 'vue'
  
  const projects = [
  {
    title: 'Projet Portfolio',
    image: '/logo.png',
    date: 'Mars 2024',
    tech: ['HTML', 'CSS', 'Vue.js'],
    site: 'https://monportfolio.com',
    repo: 'https://github.com/monrepo/portfolio'
  },
  {
    title: 'Mon CV',
    image: '/CV.jpg',
    date: 'Avril 2024',
    tech: ['HTML', 'CSS'],
    site: 'https://papaoursbzh.github.io/',
    repo: ''
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
  