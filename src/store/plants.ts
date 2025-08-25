import { defineStore } from 'pinia';

export const usePlantStore = defineStore('plants', {
    state: () => ({
        plants: [] as { id: number; name: string; growth: number }[]
    }),
    getters: {
        getPlantById: (state) => (id: number) => state.plants.find(p => p.id === id),
    },
    actions: {
        addPlant(name: string) {
            this.plants.push({ id: Date.now(), name, growth: 0 });
            this.save();
        },
        growPlant(id: number, amount = 10) {
            const plant = this.plants.find(p => p.id === id);
            if (plant) {
                plant.growth = Math.min(plant.growth + amount, 100);
                this.save();
            }
        },
        save() {
            localStorage.setItem('plants', JSON.stringify(this.plants));
        },
        load() {
            const data = localStorage.getItem('plants');
            if (data) this.plants = JSON.parse(data);
        }
    }
});
