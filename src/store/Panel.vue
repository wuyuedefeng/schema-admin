<template lang="html">
  <el-table :data="items" v-loading.body="loading" stripe style="width: 100%" v-table-dragger="{proxy: this}" :class="{'draggable-items': permission('games_update_positions')}">
    <el-table-column prop="id" label="#" width="180"></el-table-column>
    <el-table-column prop="name" label="name"></el-table-column>
    <el-table-column prop="ename" label="ename"></el-table-column>
    <el-table-column prop="enabled" label="enabled"></el-table-column>
    <el-table-column fixed="right" label="操作" width="200">
      <template scope="scope">
        <el-button @click.native.prevent="handleEdit(scope.$index, scope.row)" icon="edit" size="small">Edit</el-button>
        <el-button @click.native.prevent="handleDelete(scope.$index, scope.row)" icon="delete" type="danger" size="small">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { tableDragger } from '@/directives'
export default {
  name: 'GamePanel',
  props: ['items', 'loading', 'fetchData'],
  data () {
    return {
    }
  },
  methods: {
    handleEdit (index, row) {
      this.$router.push({ name: 'GameEdit', params: { gameId: row.id } })
    },
    updatePositions (positions) {
      this.$confirm('Are you sort positions?', 'confirm', {
        confirmButtonText: 'sure',
        cancelButtonText: 'cancel',
        type: 'warning'
      }).then(() => {
        this.api.postUpdateGamePosition({positions}).then((res) => {
          this.fetchData()
        })
      }).catch(() => {
        this.fetchData()
      })
    },
    handleDelete (index, row) {
      var gameId = row.id
      this.$confirm('Are you sure delete?', 'confirm', {
        confirmButtonText: 'sure',
        cancelButtonText: 'cancel',
        type: 'warning'
      }).then(() => {
        this.api.deleteGame(gameId).then((res) => {
          this.fetchData()
        })
      })
    }
  },
  directives: {
    tableDragger
  }
}
</script>

<style lang="css">
</style>

