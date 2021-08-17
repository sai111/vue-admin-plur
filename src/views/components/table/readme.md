### 主要功能
 1. 分页
 2. 顶部按钮
 3. 行编辑按钮
 4. 自带复选框
 5. 行编辑
 6. 自适应高度
 7. 链接列
 8. 插槽列
 9. 顶部按钮，行编辑按钮支持下拉按钮
 10. 其他功能

 ### API

#### 表格属性
| 参数 | 说明 | 类型 | 默认值 |
-|-|-|-
| columns | 表格列,详见字段属性说明 | `Array<Object>` | `[]`
| buttons| 表格上方的按钮，详见按钮字符说明| `Array<Object>` | `[]`
| pagination | 是否启用分页  | `Boolean` | `false`
| pageSize | 分页后每页条数 | `Number` | `10`
| total | 分页后数据总条数  | `Number` | `0`
| currentPage | 分页后当前页码 | `Number` | `0`
| selectable | 表格是否显示复选框 | `Boolean` | `true`
| sequence | 表格前是否显示序号列 | `Boolean` | `false`
| height | 表格高度,只有在特定情况下使用 | `Number | String | auto`

#### 表格事件
*表格除了以下事件外，可以使用element ui 表格组件的其他所有事件*
| 事件名 | 说明 | 参数
-|-|-
| page-change | 用户修改分页条数，页码等触发 | -
| selection-change | 用户修改复选框选中的行时触发 | `selection`: 选中的行数据
| current-change | 用户点击行时触发 | `current`: 点击的行数据
| sort-change | 在启用表头排序后排序状态发生变化触发 | -
| select-all | 跨页全选 | -
| select-current | 全选当前页 | `selection`: 选中的行数据

#### 表格方法
*表格除了以下方法外，可以使用element ui 表格组件的其他所有方法*

#### 内置插槽
| 插槽 | 说明 | 参数 |
-|-|-
| column | 表格列插槽，可以自定义表格列渲染方式 | `{row,column,prop,cellValue,$index,field}`  `field`为行编辑字段信息
| header | 自定义表格表头显示方式 | `{label,prop,column, $index, field }`
| button | 自定义表头顶部按钮 | `{button, selectedRow}`  `selectedRow`为选中的表格行数据
| toolbar| 自定义顶部工具条, 工具条会放在左侧按钮与右侧搜索区域中间 | -
| footerLeft | 位于底部分页左侧 | -

#### 列属性
*列属性除以下属性外，elementui 列其他属性均可使用*

| 参数 | 说明 | 类型 | 默认值 |
-|-|-|-
| label | 列名 | `String` | -
| prop | 列属性 | `String` | -
| width | 表头宽度 | `Number` | -
| sortable | 是否排序列 | `Boolean` | `false`
| formatter | 单个元格式化 | `(row,column,cellValue):String`| -
| nests | 嵌套列  | `Array<Column>` | -
| events | 单元格事件，见elementui单元格事件 | `Object<Event>` | -
| actions | 操作列，详见操作列属性 | `Array<Object> ` | -
| editable | 是否可编辑行 | `Boolean` | `false`
| field | 行编辑字符，详见行编辑字段属性 | `Object` | -
| beforeEdit | 当前单元格开启编辑时调用，返回true则开启编辑 | `(row,column,cellValue,index):Boolean`
| useSlot | 是否在当前列使用插槽，插槽名称为 `column` | `Boolean` | `false`
| hidden | 是否隐藏当前列 | `Boolean|Function` | `false`
