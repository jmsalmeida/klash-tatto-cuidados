<template>
  <main>
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
