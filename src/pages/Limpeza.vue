<template>
  <section class="container">
    <header>
      <h1 class="title">Limpeza</h1>
      <img class="logo" src="~/assets/logo-preto.png">
    </header>

    <section class="container">
      <article class="care-content">
        <div class="care-image spacer">
          <img src="~/assets/piercings-step-1.png">
        </div>
        <div class="care-information">
          <p>Usar somente soro fisiológico</p>
        </div>
      </article>

      <article class="care-content row-reverse">
        <div class="care-image">
          <img src="~/assets/piercings-step-1.png">
        </div>
        <div class="care-information">
          <p>Duas a três vezes por dia é suficiente</p>
        </div>
      </article>

      <article class="care-content">
        <div class="care-image spacer">
          <img src="~/assets/piercings-step-1.png">
        </div>
        <div class="care-information">
          <p>Não usar nenhum outro produto</p>
        </div>
      </article>

      <article class="care-content row-reverse">
        <div class="care-image">
          <img src="~/assets/piercings-step-1.png">
        </div>
        <div class="care-information">
          <p>Mantenha a higiente pessoal e limpe tudo que vai estar em contato com seu piercing (roupas, travesseiros, capacete, etc)</p>
        </div>
      </article>
    </section>

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
