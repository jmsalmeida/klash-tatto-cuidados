<template>
  <div class="page">
    <div class="bg-image thaiane-bg"></div>

    <header class="page-header">
      <h2 class="title-header">Não Mexer</h2>
      <img class="klash-logo-header" src="~/assets/logo.png">
    </header>

    <section class="main-content">
        <div class="content">
          <p class="description">Não colocar a mão no piercing</p>

          <p class="description">Não é necessário movimentar, rodar, tirar ou mexer na sua jóia</p>

          <p class="description">Cuidado com batidas, puxões e atritos que possam machucar</p>

          <p class="description">Não arranque a casca do machucado</p>

          <p class="description">Não troque a jóia antes do tempo determinado pelo profissional</p>
        </div>

    </section>

    <footer class="page-footer">
      <q-item
      to="/"
      exact
      clickable
      v-ripple>
        <div class="page-counter">
          <q-icon name="west" size=20px />
          <span>2 de 4</span>
        </div>
      </q-item>

      <q-item
      to="/dicas"
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
