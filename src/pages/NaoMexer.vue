<template>
  <section>
    <header class="green">
      <h1 class="title">Não Mexer</h1>
      <img class="logo" src="~/assets/logo-preto.png">
    </header>

    <article>
      <ul>
        <li>Não colocar a mão no piercing</li>
        <li>Não é necessário movimentar, rodar, tirar ou mexer na sua jóia</li>
        <li>Cuidado com batidas, puxões e atritos que possam machucar</li>
        <li>Não arranque a casca do machucado</li>
        <li>Não troque a jóia antes do tempo determinado pelo profissional</li>
      </ul>
    </article>

    <footer>
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
  </section>
</template>

<script>
export default {
}
</script>
