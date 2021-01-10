<template>
  <section>
    <header>
      <h1 class="title">Dicas</h1>
      <img class="logo" src="~/assets/logo-preto.png">
    </header>

    <section class="container">
      <article class="care-content">
        <div class="care-image spacer">
          <img src="~/assets/piercings-step-1.png">
        </div>
        <div class="care-information">
          <p>Mantenha o profissional informado sobre a cicatrização e tire qualquer duvida que tiver com ele</p>
        </div>
      </article>

      <article class="care-content row-reverse">
        <div class="care-image">
          <img src="~/assets/piercings-step-1.png">
        </div>
        <div class="care-information">
          <p>Evite durante o tempo de cicatrização amassar, apertar ou dormir em cima do seu piercing</p>
        </div>
      </article>

      <article class="care-content">
        <div class="care-image spacer">
          <img src="~/assets/piercings-step-1.png">
        </div>
        <div class="care-information">
          <p>Cuidado com produtos muito próximo a perfuração para não dar irritação ou alergia</p>
        </div>
      </article>
    </section>

    <footer>
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
  </section>
</template>

<script>
export default {
}
</script>
