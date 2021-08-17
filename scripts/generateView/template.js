// template.js
module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
  <div class="${compoenntName}">
    ${compoenntName}demo
  </div>
</template>
<script>
export default {
  name: '${compoenntName}',
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.${compoenntName} {
  width: 100%;
  height: 100%;
}
</style>`
},
configTemplate: compoenntName => {
  return `/** ${compoenntName}配置项 */`
}
}


