<template class="obrigado-page">
  <section>
    <header class="flex flex-center obrigado-header">
      <img class="logo" src="~/assets/logo.png">
    </header>

    <footer>
      <div class="page-counter">
        <span>4 de 4</span>
      </div>

      <q-item
      to="/"
      exact
      clickable
      v-ripple>
        <div class="page-control">
          <q-icon name="arrow_right_alt" size=30px />
          <span>inicio</span>
        </div>
      </q-item>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
