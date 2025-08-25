<template>
    <div class="p-4 bg-green-100 rounded-xl shadow">
        <h3>{{ plant.name }}</h3>
        <div class="text-4xl">
            {{ stageEmoji }}
        </div>
        <ProgressBar :value="plant.growth" :max="100" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ProgressBar from '../components/general/ProgressBar.vue';

const props = defineProps<{ plant: { name: string; growth: number } }>();

const stageEmoji = computed(() => {
    if (props.plant.growth < 25) return "🌱";
    if (props.plant.growth < 50) return "🌿";
    if (props.plant.growth < 75) return "🌸";
    return "🌳";
});
</script>
