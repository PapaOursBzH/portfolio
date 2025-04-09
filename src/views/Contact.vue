<template>
  <section id="contact">
    <h3>Contactez-moi</h3>
    <form :action="formAction" method="POST">
      <div class="form-group">
        <label>Nom / Prénom</label>
        <input name="Nom" type="text" required />
      </div>
      <div class="form-group">
        <label>Objet</label>
        <input name="Objet" type="text" required />
      </div>
      <div class="form-group">
        <label>Message</label>
        <textarea name="Message" required></textarea>
      </div>
      <!-- Formsubmit-specific options -->
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" :value="redirectUrl" />
      
      <button type="submit">Envoyer</button>
    </form>
  </section>
</template>

<script setup>
const emailTo = import.meta.env.VITE_CONTACT_EMAIL
const formAction = `https://formsubmit.co/${emailTo}`

// Redirection après soumission (facultatif)
const redirectUrl = window.location.href + '?success=true'
</script>

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
