<template>
  <section class="inicio-page">
    <div class="inicio-header">
      <span>Klash Tattoo Suzano</span>
      <div>
        <img src="~/assets/instagram.png"/>
        <img src="~/assets/instagram.png"/>
      </div>
    </div>

    <div class="content">
      <img class="logo" src="~/assets/logo.png"/>

      <q-item
      to="/limpeza"
      exact
      clickable
      v-ripple>
        <q-btn
        color="white"
        text-color="black"
        label="Cuidados com o seu piercing" />
      </q-item>
    </div>
  </section>
</template>

<script>
export default {
}
</script>
