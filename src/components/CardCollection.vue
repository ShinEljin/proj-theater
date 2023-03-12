<template>
  <div
    class="flex flex-col justify-center gap-6 md:gap-12 h-full max-w-6xl mx-auto bg-black py-8 px-4"
  >
    <div class="text-white flex justify-between items-center">
      <h1 class="text-xl lg:text-4xl font-bold">{{ title }}</h1>
      <router-link
        :to="{ name: 'movies' }"
        class="text-red-500 hover:text-gray-200 cursor-pointer text-sm font-medium lg:text-xl"
        >SEE MORE <i class="fa-solid fa-circle-chevron-right ml-1"></i>
      </router-link>
    </div>
    <div>
      <Carousel :posters="posters" />
    </div>
  </div>
</template>

<script setup>
import Carousel from "./Carousel.vue";

defineProps({
  title: String,
  posters: Array,
});
</script>
