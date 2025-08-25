<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold mb-6">🌱 Mi Jardín</h1>

        <!-- Sección de progreso general -->
        <section class="mb-8">
            <h2 class="text-lg font-semibold mb-2">
                Progreso Diario
            </h2>
            <ProgressBar :value="30" :max="100" />
        </section>

        <!-- Lista de hábitos con progreso individual -->
        <section>
            <h2 class="text-lg font-semibold mb-2">Hábitos</h2>
            <div class="space-y-4">
                <div class="p-4 bg-white shadow rounded">
                    <p class="mb-2">Beber Agua 💧</p>
                    <ProgressBar :value="4" :max="8" />
                </div>

                <div class="p-4 bg-white shadow rounded">
                    <p class="mb-2">Ejercicio 🏃‍♀️</p>
                    <ProgressBar :value="2" :max="5" />
                </div>

                <div class="p-4 bg-white shadow rounded">
                    <p class="mb-2">Leer 📖</p>
                    <ProgressBar :value="1" :max="3" />
                </div>
            </div>
        </section>
    </div>

    <GardenGrid />
</template>

<script setup lang="ts">
import GardenGrid from "@/components/GardenGrid.vue";
import ProgressBar from "../components/general/ProgressBar.vue";
</script>

<style scoped>
    /* Opcional: estilos personalizados */
</style>
