import { Table, TableColumn } from 'element-ui'

export default {
  name: 'TableCore',
  props: {
    ...Table.props,
    // 表格数据
    data: {
      type: Array,
      default: () => []
    },
    /**
     * columns列字段信息
     * label: 名称
     * prop: 字段属性
     * editable: 是否可编辑
     * field: {} // 编辑的字段属性
     */
     columns: {
      type: Array,
      default: () => []
    },
    // 是否分页
    pagination: {
      type: Boolean,
      default: true
    },
    // 每页条数
    pageSize: {
      type: Number,
      default: 10
    },
    // 总条数
    total: {
      type: Number,
      default: 0
    },
    height: {
      type: [Number, String],
      default: 0
    },
    // 表格是否排序
    sortable: {
      type: Boolean,
      default: false
    }
  }
}
