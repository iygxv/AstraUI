<template>
  <div 
  class="astra__button" 
  :class="[
      'astra__button--' + type,
      { 'is-plain': plain, 'is-disabled': disabled, 'is-round': round },
      'astra__button--size-' + size,
    ]"
    :disabled="disabled"
    @click="handlerClick" >
    <i v-if="icon !== ''" :class="icon"></i>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "astraButton",
});
</script>

<script setup lang="ts">
import { ref } from "vue";
let props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  size: {
    type: String,
    default: "default",
  },
  icon: {
    type: String,
    default: "",
  },
  plain: Boolean,
  disabled: Boolean,
  round: Boolean,
});
let msg = ref("button");
let emit = defineEmits(["click"]);
let handlerClick = () => {
  emit("click", {
    type: props.type,
    size: props.size,
    plain: props.plain || false,
    disabled: props.disabled || false,
    round: props.round || false,
  });
};
</script>

<style lang="scss" scope>
</style>