<script setup lang="ts">
interface Props {
  disabled?: boolean
  content?: string
}

const { content = 'HelloWorld', disabled = false } = defineProps<Props>()

defineEmits({
  click: (_e: MouseEvent) => true,
})
</script>

<template>
  <button class="button" :disabled="disabled" @click="$emit('click', $event)">
    {{ content }}
  </button>
</template>

<style lang="scss">
@import "./style";
</style>
