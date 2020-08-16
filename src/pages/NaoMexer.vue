<template>
  <section>
    <header class="green">
      <h1 class="title">Não Mexer</h1>
      <img class="logo" src="~/assets/logo-preto.png">
    </header>

    <article>
      <ul>
        <li>Não colocar a mão no piercing <span class="bold">(Exceto pra realizar a limpeza)</span></li>
        <li>Não é necessário <span class="bold">movimentar</span>, <span class="bold">rodar</span>, <span class="bold">tirar</span> ou <span class="bold">mexer</span> em sua jóia</li>
        <li>Cuidado com <span class="bold">batidas</span>, <span class="bold">puxões</span> e <span class="bold">atritos</span></li>
        <li><span class="bold">Não arranque</span> as cascas do local perfurado</li>
        <li><span class="bold">Não troque</span> a joia antes do tempo determinado pelo profissional</li>
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
