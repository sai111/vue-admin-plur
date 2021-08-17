<template>
  <div class="data-table">
    <table-section />
  </div>
</template>
<script>
import TableSection from './coms/table-selection.vue'
export default {
  name: 'TableBlock',
  components: {
    TableSection
  },
  props: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
