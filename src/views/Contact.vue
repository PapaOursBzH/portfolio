<template>
    <section id="contact">
      <h3>Contactez-moi</h3>
      <form>
        <div class="form-group">
          <label>Nom / Prénom</label>
          <input type="text" required />
        </div>
        <div class="form-group">
          <label>Objet</label>
          <input type="text" required />
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  </template>
  
  <style scoped>
  #contact {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  </style>
  