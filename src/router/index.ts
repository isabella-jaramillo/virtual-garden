// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import GardenPage from '@/pages/GardenPage.vue';
import HabitsPage from '@/pages/HabitsPage.vue';
import SettingsPage from '@/pages/SettingsPage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Garden',
        component: GardenPage,
    },
    {
        path: '/habits',
        name: 'Habits',
        component: HabitsPage,
    },
    {
        path: '/settings',
        name: 'Settings',
        component: SettingsPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
