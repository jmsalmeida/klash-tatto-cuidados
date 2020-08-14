<template>
  <section>
    <header class="blue">
      <h1 class="title">Dicas</h1>
      <img class="logo" src="~/assets/logo.png">
    </header>

    <article>
      <ul>
        <li>Nos informe qualquer dificuldade com a <span class="bold">cicatrização</span></li>
        <li>Tire qualquer <span class="bold">dúvida</span> com nossa equipe</li>
        <li>Evite durante o tempo de cicatrização <span class="bold">amassar</span>, <span class="bold">apertar</span> ou <span class="bold">dormir</span> em cima do seu piercing</li>
        <li>Cuidado com produtos próximos a perfuração para evitar, <span class="bold">irritação</span> ou <span class="bold">alergia</span></li>
      </ul>
    </article>

    <footer>
      <div class="page-counter">
        <span>3 de 4</span>
      </div>

      <q-item
      to="/obrigado"
      exact
      clickable
      v-ripple>
        <div class="page-control">
          <q-icon name="arrow_right_alt" size=30px />
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
