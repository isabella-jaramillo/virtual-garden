<template>
  <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
    <div class="bg-green-500 h-4 transition-all" :style="{ width: percentage + '%' }"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  value: number;
  max: number;
}

const props = defineProps<Props>();

const percentage = computed(() => (props.value / props.max) * 100);
</script>
