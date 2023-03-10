<template>
  <div
    class="flex flex-col justify-center gap-6 md:gap-12 h-full max-w-6xl mx-auto bg-black py-8 px-8"
  >
    <div class="text-white flex justify-between items-center">
      <h1 class="text-2xl lg:text-4xl font-bold">{{ title }}</h1>
      <a href="!#" class="text-gray-400 text-normal lg:text-2xl pr-8"
        >See more</a
      >
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
