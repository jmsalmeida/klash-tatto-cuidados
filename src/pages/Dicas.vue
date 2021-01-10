<template>
  <section>
    <header class="blue">
      <h1 class="title">Dicas</h1>
      <img class="logo" src="~/assets/logo-preto.png">
    </header>

    <article>
      <ul>
        <li>Mantenha o profissional informado sobre a cicatrização e tire qualquer duvida que tiver com ele</li>
        <li>Evite durante o tempo de cicatrização amassar, apertar ou dormir em cima do seu piercing</li>
        <li>Cuidado com produtos muito próximo a perfuração para não dar irritação ou alergia</li>
      </ul>
    </article>

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
