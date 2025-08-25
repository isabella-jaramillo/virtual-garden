<template>
    <div class="grid grid-cols-4 gap-4">
        <PlantCard v-for="plant in plants"
                   :key="plant.id"
                   :plant="plant" />
    </div>
</template>

<script setup lang="ts">
import { usePlantStore } from '../store/plants';
import PlantCard from './PlantCard.vue';

const plantStore = usePlantStore();
const plants = plantStore.plants;
</script>
