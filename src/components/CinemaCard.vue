<template>
  <div
    class="max-w-6xl mx-auto flex text-white border-y border-red-500 gap-3 md:gap-8 py-4 relative"
  >
    <p
      class="text-sm md:text-base text-gray-400 underline absolute top-4 right-6 cursor-pointer hover:text-white hidden sm:block"
    >
      Show Future Dates
    </p>
    <p
      class="text-sm md:text-base text-gray-400 underline absolute top-4 right-6 cursor-pointer hover:text-white block sm:hidden"
    >
      . . .
    </p>
    <img
      :src="movie.url"
      :alt="movie.title"
      class="h-[200px] w-[140px] md:h-[300px] md:w-[205px]"
    />
    <div class="my-auto">
      <h2 class="text-2xl md:text-4xl font-bold">CINEMA {{ index + 1 }}</h2>
      <h3 class="text-xl md:text-3xl font-semibold">{{ movie.hTitle }}</h3>
      <h4 class="text-base md:text-xl text-gray-400 mt-1 md:mt-2">
        Monday, 13 March 2023
      </h4>
      <div class="flex flex-wrap gap-2 md:gap-4 mt-3 md:mt-6">
        <div
          class="border border-white my-auto px-2 py-1 md:px-4 md:py-2 font-bold text-base md:text-xl cursor-pointer hover:text-red-500"
        >
          12:30 PM
        </div>
        <div
          class="border border-white my-auto px-2 py-1 md:px-4 md:py-2 font-bold text-base md:text-xl cursor-pointer hover:text-red-500"
        >
          2:45 PM
        </div>

        <div
          class="border border-white my-auto px-2 py-1 md:px-4 md:py-2 font-bold text-base md:text-xl cursor-pointer hover:text-red-500"
        >
          5:00 PM
        </div>
        <div
          class="border border-white my-auto px-2 py-1 md:px-4 md:py-2 font-bold text-base md:text-xl cursor-pointer hover:text-red-500"
        >
          7:30 PM
        </div>
      </div>
      <button
        class="bg-red-600 w-[180px] px-2 md:px-4 py-2 md:py-3 rounded-lg hover:scale-110 hover:opacity-80 transition-all duration-400 font-semibold mt-4 md:mt-8"
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
