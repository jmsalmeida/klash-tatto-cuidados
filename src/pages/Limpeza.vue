<template>
  <div class="page">
    <div class="bg-image felipe-bg"></div>

    <header class="page-header">
      <h2 class="title-header">Limpeza</h2>
      <img class="klash-logo-header" src="~/assets/logo.png">
    </header>

    <section class="main-content">
        <div class="content">
          <p class="description">Limpar somente com soro fisiológico, duas a três vezes por dia é suficiente</p>

          <p class="description">Não usar nenhum outro produto</p>

          <p class="description">Mantenha a higiente pessoal e limpe tudo que vai estar em contato com seu piercing (roupas, travesseiros, capacete, etc)</p>
        </div>
    </section>

    <footer class="page-footer">
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
  </div>
</template>

<script>
export default {
}
</script>
