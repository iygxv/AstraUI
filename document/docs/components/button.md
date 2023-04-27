# Button 按钮
### 基础用法
使用`type`、`plain`和`round`属性来定义 Button 的样式。

:::demo
```vue
<template>
  <div>
    <astra-button>默认按钮</astra-button>
    <astra-button type="primary">主要按钮</astra-button>
    <astra-button type="success">成功按钮</astra-button>
    <astra-button type="info">信息按钮</astra-button>
    <astra-button type="warning">警告按钮</astra-button>
    <astra-button type="danger">危险按钮</astra-button>
  </div>
  <div class="m-t-10">
    <astra-button plain>朴素按钮</astra-button>
    <astra-button type="primary" plain>主要按钮</astra-button>
    <astra-button type="success" plain>成功按钮</astra-button>
    <astra-button type="info" plain>信息按钮</astra-button>
    <astra-button type="warning" plain>警告按钮</astra-button>
    <astra-button type="danger" plain>危险按钮</astra-button>
  </div>
  <div class="m-t-10">
    <astra-button round>圆形按钮</astra-button>
    <astra-button type="primary" round>主要按钮</astra-button>
    <astra-button type="success" round>成功按钮</astra-button>
    <astra-button type="info" round>信息按钮</astra-button>
    <astra-button type="warning" round>警告按钮</astra-button>
    <astra-button type="danger" round>危险按钮</astra-button>
  </div>
</template>

<script lang="ts" setup>
let handleClick = (props) => {
  alert("点击了按钮")
}
</script>
<style scope lang="scss">
.astra__button  {
  margin-right: 10px;
  margin-bottom: 10px;
}
.m-t-10{
  margin-top: 10px;
}
</style>
```
:::

### Attributes

| 参数     | 说明                         | 类型    | 可选值                              | 默认值 |
| -------- | ---------------------------- | ------- | ----------------------------------- | ------ |
| size     | 尺寸                         | string  | default,medium,small                | —      |
| type     | 类型                         | string  | primary,success,warning,danger,info | —      |
| plain    | 是否朴素按钮                 | Boolean | —                                   | false  |
| disabled | 是否禁用状态                 | boolean | —                                   | false  |
| icon     | 图标，已有的图标库中的图标名 | string  | —                                   | —      |

### 事件

| 事件名称  | 说明                          |  返回值    
| -------- | ---------------------------- | ------- 
| click    | 点击按钮时触发的事件      | props（具体的属性） 
