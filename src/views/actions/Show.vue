<template>
  <div>
    show
  </div>
</template>

<script>
export default {
  methods: {
    fetchData () {
      this._fetchData(this.$api.get(this.actionInfo.api))
    }
  }
}
</script>

<style lang="css">
</style>
