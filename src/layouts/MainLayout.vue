<template>
  <main>
    <div v-bind:class="{ 'hidden': $route.path == '/obrigado' }" class="top-info">
      <span>Cuidados com seu piercing</span>
      <div class="top-icons">
        <a href="https://www.instagram.com/klashtattoosuzano/"><img src="~/assets/instagram.png"></a>
        <a href="https://www.facebook.com/KlashTattooePiercing/"><img src="~/assets/facebook.png"></a>
      </div>
    </div>
    <q-layout>
      <q-page-container>
        <keep-alive>
          <router-view />
        </keep-alive>
      </q-page-container>
    </q-layout>
  </main>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>
