<template>
  <div>
    <el-table :data="linkData" style="width:70%;" max-height="250">
      <el-table-column
        prop="linkName"
        label="链接名称"
        align="center"
        show-overflow-tooltip
        min-width="30%"
      >
        <template slot-scope="scope">
          <el-input size="small" v-model="linkData[scope.$index].linkName" placeholder="请填写链接名称"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        min-width="70%"
        prop="href"
        label="链接地址"
        type="url"
      >
        <template slot-scope="scope">
          <el-input size="small" v-model="linkData[scope.$index].href"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="change"
        label="操作"
        align="center"
        show-overflow-tooltip
        min-width="16%"
      >
        <template slot-scope="scope">
          <!-- <el-button v-if="scope.$index === 0" @click="add" circle el-icon-plus>添加</el-button> -->
          <el-button
            size="small"
            v-if="scope.$index === 0"
            @click="add"
            type="primary"
            icon="el-icon-plus"
            circle
          ></el-button>
          <el-button
            size="small"
            v-if="scope.$index > 0"
            @click="deleteRow(scope.$index)"
            type="danger"
            icon="el-icon-close"
            circle
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      linkData: [
        {
          linkName: null,
          href: null
        }
      ]
    }
  },
  components: {
  },

  methods: {
    /**
    * 添加一行规格
    */
    add () {
      if (this.linkData.length >= 100) {
        this.$message.error('最多添加5个链接')
        return
      }
      this.linkData.push({ linkName: '', href: '' })
    },
    /**
     * 删除一行规格
     */
    deleteRow (index) {
      this.linkData.splice(index, 1)
    }
  }
}
</script>
<style lang="scss">
</style>