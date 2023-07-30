<template>
  <div class="page">
    <div class="bg-image zeca-bg"></div>

    <header class="page-header">
      <span></span>
      <h2 class="title-header">Dicas</h2>
      <img class="klash-logo-header" src="~/assets/logo.png">
    </header>

    <section class="main-content">
      <div class="content">
        <ItemComponent
          description="Mantenha o profissional informado sobre a cicatrização e tire qualquer duvida que tiver com ele" />

        <ItemComponent
          description="Evite durante o tempo de cicatrização amassar, apertar ou dormir em cima do seu piercing" />

        <ItemComponent description="Cuidado com produtos muito próximo a perfuração para não dar irritação ou alergia" />
      </div>

    </section>

    <footer class="page-footer-container">
      <div class="page-footer">
        <q-item to="/nao-mexer" exact clickable v-ripple>
          <div class="page-counter">
            <q-icon name="west" size=20px />
            <span>3 de 4</span>
          </div>
        </q-item>

        <q-item to="/obrigado" exact clickable v-ripple>
          <div class="page-control">
            <q-icon name="east" size=20px />
            <span>Próximo</span>
          </div>
        </q-item>
      </div>
    </footer>
  </div>
</template>

<script>
import ItemComponent from '../components/ItemComponent.vue'

export default {
  components: {
    ItemComponent
  }
}
</script>
