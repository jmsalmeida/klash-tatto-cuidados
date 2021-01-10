<template>
  <section>
    <header class="yellow">
      <h1 class="title">Limpeza</h1>
      <img class="logo" src="~/assets/logo-preto.png">
    </header>

    <article>
      <ul>
        <li>Usar somente soro fisiológico</li>
        <li>Duas a três vezes por dia é suficiente</li>
        <li>Não usar nenhum outro produto</li>
        <li>Mantenha a higiente pessoal e limpe tudo que vai estar em contato com seu piercing (roupas, travesseiros, capacete, etc)</li>
      </ul>
    </article>

    <footer>
      <div class="page-counter">
        <span>1 de 4</span>
      </div>

      <q-item
      to="/nao-mexer"
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
