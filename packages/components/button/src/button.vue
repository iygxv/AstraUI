<template>
  <div
  class="astra__button"
  :class="[
      'astra__button--' + type,
      { 'is-plain': plain, 'is-disabled': disabled, 'is-round': round },
      'astra__button--size-' + size,
    ]"
    :disabled="disabled"
    @click="handleClick" >
    <i v-if="icon !== ''" :class="icon"></i>
    <slot></slot>
    {{ msg }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'astraButton'
});
</script>

<script setup lang="ts">
import { ref } from 'vue';
defineProps({
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'default'
  },
  icon: {
    type: String,
    default: ''
  },
  plain: Boolean,
  disabled: Boolean,
  round: Boolean
});
const msg = ref('button');
const emit = defineEmits(['click']);
const handleClick = (evt: MouseEvent) => {
  emit('click', evt);
}
</script>

<style lang="scss" scope>
</style>