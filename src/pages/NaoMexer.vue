<template>
  <div class="page">
    <div class="bg-image thaiane-bg"></div>

    <header class="page-header">
      <span></span>
      <h2 class="title-header">Não Mexer</h2>
      <img class="klash-logo-header" src="~/assets/logo.png">
    </header>

    <section class="main-content">
      <div class="content">
        <ItemComponent description="Não colocar a mão no piercing" />
        <ItemComponent description="Não é necessário movimentar, rodar, tirar ou mexer na sua jóia" />
        <ItemComponent description="Cuidado com batidas, puxões e atritos que possam machucar" />
        <ItemComponent description="Não arranque a casca do machucado" />
        <ItemComponent description="Não troque a jóia antes do tempo determinado pelo profissional" />
      </div>

    </section>

    <footer class="page-footer-container">
      <div class="page-footer">
        <q-item to="/" exact clickable v-ripple>
          <div class="page-counter">
            <q-icon name="west" size=20px />
            <span>2 de 4</span>
          </div>
        </q-item>

        <q-item to="/dicas" exact clickable v-ripple>
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
