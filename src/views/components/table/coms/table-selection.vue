<template>
  <div class="table-selection">
    <div class="table-section-select">
      <el-checkbox
        v-model="checked"
        class="table-checkbox"
        @change="handleCheck"
      />
      <el-select
        v-model="value"
        placeholder=""
        class="table-select"
        @change="handleChange"
      >
        <el-option-group
          v-for="group in options"
          :key="group.label"
          :label="group.label"
        >
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-option-group>
      </el-select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TableSection',
  components: {},
  props: {},
  data() {
    return {
      checked: false,
      visible: false,
      menuVisibleOnFocus: false,
      value: '',
      options: [
        {
          label: '所有',
          options: [
            { label: '全选', value: 'all' },
            { label: '不选', value: 'none' }
          ]
        },
        {
          label: '当前页',
          options: [
            { label: '全选', value: 'curPage' },
            { label: '反选', value: 'inverse' }
          ]
        }
      ]
    }
  },
  mounted() {},
  methods: {
    handleCheck(val) {
      this.value = val ? 'curPage' : ''
    },
    handleChange(val) {
      const ch = ['all', 'curPage']
      this.checked = ch.includes(val)
    }
  }
}
</script>
<style scoped lang="scss">
.table-selection {
  width: 100%;
  .table-section-select {
    width: 80px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    .table-checkbox {}
    .table-select.el-select {
      border: none;
      ::v-deep.el-input.el-input--suffix {
        width: 20px;
        margin-left: 20px;
        .el-input__inner {
          border: none;
          padding: 0;
          width: 0;
        }
      }
    }
  }
}
</style>
