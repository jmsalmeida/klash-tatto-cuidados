<template>
  <main>
    <div class="top-info">
      <span>Cuidados com seu piercing</span>
      <div class="top-icons">
        <q-icon name="facebook" size=30px />
        <q-icon name="instagram" size=30px />
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
