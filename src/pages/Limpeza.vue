<template>
  <section>
    <header class="yellow">
      <h1 class="title">Limpeza</h1>
      <img class="logo" src="~/assets/logo.png">
    </header>

    <article>
      <ul>
        <li>Usar somente soro fisiológico <span class="bold">(Não usar outros produtos)</span></li>
        <li>Limpe e seque o local com cotonete <span class="bold">(2 à 3 vezes por dia)</span></li>
        <li>Mantenha a higiene pessoal</li>
        <li>Limpe tudo o que vai estar em contato com o piercing <span class="bold">(roupas, travesseiros, capacete, etc)</span></li>
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
