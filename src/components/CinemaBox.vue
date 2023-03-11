<template>
  <div
    class="flex flex-col items-center justify-center gap-1 sm:gap-2 md:gap-4 mt-16 2xl:mt-0 py-4 px-4 md:py-8 md:px-8 rounded-lg bg-[#A2050B7f]"
  >
    <div
      class="w-full h-12 bg-black text-white flex justify-center items-center"
    >
      <p class="font-bold text-2xl tracking-widest">SCREEN</p>
    </div>
    <div v-for="row in rows" :key="row" class="flex gap-1 sm:gap-2 md:gap-4">
      <Box v-for="column in columns" :key="column" />
    </div>
  </div>
</template>

<script setup>
import Box from "./Box.vue";

const rows = [];
const columns = [];

for (let i = 0; i < 6; i++) {
  rows.push(i);
}

for (let i = 0; i < 10; i++) {
  columns.push(i);
}
</script>
