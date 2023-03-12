<template>
  <div
    class="max-w-6xl mx-auto flex text-white border-y border-red-500 gap-8 py-4 relative"
  >
    <p
      class="text-gray-400 underline absolute top-4 right-6 cursor-pointer hover:text-white"
    >
      Show Future Dates
    </p>
    <img :src="movie.url" :alt="movie.title" class="h-[300px]" />
    <div class="my-auto">
      <h2 class="text-4xl font-bold">CINEMA {{ index + 1 }}</h2>
      <h3 class="text-3xl font-semibold">{{ movie.hTitle }}</h3>
      <h4 class="text-xl text-gray-400 mt-2">Monday, 13 March 2023</h4>
      <div class="flex gap-4 mt-6">
        <div
          class="border border-white px-4 py-2 font-bold text-xl cursor-pointer hover:text-red-500"
        >
          12:30 PM
        </div>
        <div
          class="border border-white px-4 py-2 font-bold text-xl cursor-pointer hover:text-red-500"
        >
          2:45 PM
        </div>
        <div
          class="border border-white px-4 py-2 font-bold text-xl cursor-pointer hover:text-red-500"
        >
          5:00 PM
        </div>
        <div
          class="border border-white px-4 py-2 font-bold text-xl cursor-pointer hover:text-red-500"
        >
          7:30 PM
        </div>
      </div>
      <button
        class="bg-red-600 w-[180px] px-4 py-3 rounded-lg hover:scale-110 hover:opacity-80 transition-all duration-400 font-semibold mt-8"
        @click="route(index)"
      >
        Book Now
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

defineProps({
  movie: Object,
  index: Number,
});

const router = useRouter();

const route = (index) => {
  router.push({ name: "movieBook", params: { movie: index } });
};
</script>
