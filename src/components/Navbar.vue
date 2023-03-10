<template>
  <nav class="w-full fixed top-0 px-8 z-10 backdrop-filter backdrop-blur-lg">
    <div
      class="text-gray-400 flex items-center justify-between md:justify-start md:gap-40 h-24 max-w-6xl mx-auto"
    >
      <h3 class="text-2xl text-white">THEATER</h3>
      <div class="gap-36 hidden md:flex">
        <RouterLink :to="{ name: 'home' }">HOME</RouterLink>
        <RouterLink :to="{ name: 'cinema' }">CINEMA</RouterLink>
        <RouterLink :to="{ name: 'movies' }">MOVIES</RouterLink>
      </div>
      <button type="button" @click="menuOpen = !menuOpen" v-if="!menuOpen">
        <i class="fa-solid fa-bars text-4xl text-white block md:hidden"></i>
      </button>
      <button type="button" @click="menuOpen = !menuOpen" v-if="menuOpen">
        <i class="fa-solid fa-x text-4xl text-white block md:hidden"></i>
      </button>
    </div>
    <div
      class="backdrop-filter backdrop-blur-lg text-white rounded-md flex flex-col items-center gap-4 py-4 shadow-2xl"
      v-if="menuOpen"
    >
      <RouterLink :to="{ name: 'home' }" class="text-xl">HOME</RouterLink>
      <RouterLink :to="{ name: 'cinema' }" class="text-xl">CINEMA</RouterLink>
      <RouterLink :to="{ name: 'movies' }" class="text-xl">MOVIES</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
</script>
