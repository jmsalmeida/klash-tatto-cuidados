<template>
  <section>
    <header>
      <h1 class="title">Não Mexer</h1>
      <img class="logo" src="~/assets/logo-preto.png">
    </header>

    <section class="container">
      <article class="care-content">
        <div class="care-image spacer">
          <img src="~/assets/piercings-step-1.png">
        </div>
        <div class="care-information">
          <p>Não colocar a mão no piercing</p>
        </div>
      </article>

      <article class="care-content row-reverse">
        <div class="care-image">
          <img src="~/assets/piercings-step-1.png">
        </div>
        <div class="care-information">
          <p>Não é necessário movimentar, rodar, tirar ou mexer na sua jóia</p>
        </div>
      </article>

      <article class="care-content">
        <div class="care-image spacer">
          <img src="~/assets/piercings-step-1.png">
        </div>
        <div class="care-information">
          <p>Cuidado com batidas, puxões e atritos que possam machucar</p>
        </div>
      </article>

      <article class="care-content row-reverse">
        <div class="care-image">
          <img src="~/assets/piercings-step-1.png">
        </div>
        <div class="care-information">
          <p>Não arranque a casca do machucado</p>
        </div>
      </article>

      <article class="care-content">
        <div class="care-image spacer">
          <img src="~/assets/piercings-step-1.png">
        </div>
        <div class="care-information">
          <p>Não troque a jóia antes do tempo determinado pelo profissional</p>
        </div>
      </article>
    </section>

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
