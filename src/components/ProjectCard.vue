<template>
    <div class="card" @click="$emit('open', project)">
        <img :src="project.image" :alt="project.title" class="project-image" />
      <h4>{{ project.title }}</h4>
    </div>
  </template>
  
  <script setup>
  defineProps(['project'])
  defineEmits(['open'])
  </script>
  
  <style scoped>
  .card {
    cursor: pointer;
    width: 250px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    border-radius: 10px;
    overflow: hidden;
  }
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.2);
  }
  .card img {
    width: 100%;
    height: auto;
  }
  .card h4 {
    text-align: center;
    margin: 0.5rem 0;
  }
  .project-image {
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  border-radius: 8px;
}
  </style>
  