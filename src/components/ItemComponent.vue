<template>
  <div class="item">
    <div class="anchor-item">
      <img src="~assets/icons/klash-ancora.png" alt="Ícone de âncora">
    </div>

    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
  .item
    display: flex
    margin-bottom: 10px
    align-items: flex-start

    .anchor-item
      img
        width: 20px
        padding-top: 5px
        margin-right: 14px

    .description
      font-family: Merriweather

      font-weight: 500
      font-size: 1.2em
      line-height: 150%
      margin-bottom: 40px
</style>
