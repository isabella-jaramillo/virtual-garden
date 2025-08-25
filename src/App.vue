<template>
    <div id="app" class="min-h-screen flex flex-col">
        <!-- Navbar global -->
        <header class="bg-gray-800 text-white p-4">
            <h1 class="text-xl">Virtual Garden</h1>
        </header>

        <!-- Aquí se renderizan las páginas según la ruta -->
        <main class="flex-grow">
            <RouterView />
        </main>

        <!-- Footer global -->
        <footer class="bg-gray-200 text-center p-4">
            <p>2025 Virtual Garden</p>
        </footer>
    </div>
</template>

<script setup lang="ts">
    // Generalmente no necesitas mucha lógica aquí
</script>

<style>
    /* Puedes definir estilos globales si no usas Tailwind */
</style>
