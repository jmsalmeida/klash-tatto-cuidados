<template>
  <div class="page">
    <div class="bg-image zeca-bg"></div>

    <header class="page-header">
      <h2 class="title-header">Dicas</h2>
      <img class="klash-logo-header" src="~/assets/logo.png">
    </header>

    <section class="main-content">
        <div class="content">
          <p class="description">Mantenha o profissional informado sobre a cicatrização e tire qualquer duvida que tiver com ele</p>

          <p class="description">Evite durante o tempo de cicatrização amassar, apertar ou dormir em cima do seu piercing</p>

          <p class="description">Cuidado com produtos muito próximo a perfuração para não dar irritação ou alergia</p>
        </div>

    </section>

    <footer class="page-footer">
      <q-item
      to="/nao-mexer"
      exact
      clickable
      v-ripple>
        <div class="page-counter">
          <q-icon name="west" size=20px />
          <span>3 de 4</span>
        </div>
      </q-item>

      <q-item
      to="/obrigado"
      exact
      clickable
      v-ripple>
        <div class="page-control">
          <q-icon name="east" size=20px />
          <span>Próximo</span>
        </div>
      </q-item>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>
