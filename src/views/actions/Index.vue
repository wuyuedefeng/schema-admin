<template>
  <div>
    <panel v-if="actionInfo" :items="items" :loading="loading" :fetchData="fetchData" :actionInfo="actionInfo"></panel>
  </div>
</template>

<script>
import Panel from '@/components/ui/Panel'
// mixin
import mixinIndex from '@/components/mixin/index'
export default {
  mixins: [mixinIndex],
  methods: {
    fetchData () {
      this._fetchData(this.$api.get(this.actionInfo.api))
    }
  },
  components: {
    [Panel.name]: Panel
  }
}
</script>

<style lang="css">
</style>
