export default {
  url: 'https://element.eleme.cn/#/zh-CN/component/time-picker#ren-yi-shi-jian-fan-wei',
  attrs: {
    startPlaceholder: {
      type: 'input',
      label: '范围选择时开始日期的占位内容'
    },
    endPlaceholder: {
      type: 'input',
      label: '范围选择时结束日期的占位内容'
    },
    rangeSeparator: {
      type: 'input',
      label: '选择范围时的分隔符'
    },
    arrowControl: {
      type: 'switch',
      label: '是否使用箭头进行时间选择'
    },
    valueFormat: {
      type: 'input',
      label: '绑定值的格式, 不指定则绑定值为 Date 对象',
      attrs: {
        clearable: true
      }
    },
    clearable: {
      type: 'switch',
      label: '是否显示清除按钮'
    },
    editable: {
      type: 'switch',
      label: '文本框可输入'
    },
    size: {
      type: 'select',
      label: '输入框尺寸',
      options: [{ text: '默认', value: null }, 'medium', 'small', 'mini']
    },
    align: {
      type: 'select',
      label: '对齐方式',
      options: ['left', 'center', 'right']
    },
    popperClass: {
      type: 'input',
      label: 'TimePicker 下拉框的类名'
    },
    pickerOptions: {
      type: 'json-editor',
      label: '当前时间日期选择器特有的选项'
    },
    prefixIcon: {
      type: 'input',
      label: '自定义头部图标的类名'
    },
    clearIcon: {
      type: 'input',
      label: '自定义清空图标的类名'
    },
    readonly: {
      type: 'switch',
      label: '完全只读'
    }
  },
  attrsData: {},
  attrsDefaultData: {
    readonly: false,
    editable: true,
    clearable: true,
    align: 'left',
    size: null,
    pickerOptions: {},
    rangeSeparator: '-',
    prefixIcon: 'el-icon-time',
    clearIcon: 'el-icon-circle-close'
  },
  common: {
    default: {
      type: 'timerange',
      label: '默认值'
    }
  },
  commonData: {},
  commonDefaultData: {}
}
