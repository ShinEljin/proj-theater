<template>
  <div class="">
    <div
      class="relative flex justify-center bg-main-bg h-[20rem] bg-cover bg-center"
    >
      <div class="absolute bottom-0 flex justify-center">
        <div
          class="text-white px-12 md:px-16 lg:px-24 py-3 md:py-4 lg:py-6 rounded-t-2xl font-bold text-sm lg:text-xl cursor-pointer"
          @click="tabActive = 'NS'"
          :class="`${tabActive === 'NS' ? 'bg-[#A2050B]' : 'bg-[#3D0000]'}`"
        >
          NOW SHOWING
        </div>
        <div
          class="text-white px-12 md:px-16 lg:px-24 py-3 md:py-4 lg:py-6 rounded-t-2xl font-bold text-sm lg:text-xl cursor-pointer"
          @click="tabActive = 'CS'"
          :class="`${tabActive === 'CS' ? 'bg-[#A2050B]' : 'bg-[#3D0000]'}`"
        >
          COMING SOON
        </div>
      </div>
    </div>
    <div>
      <div class="border-t-[12px] border-t-[#A2050B] bg-black">
        <div
          class="grid grid-flow-row grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 max-w-6xl mx-auto py-12 px-4"
        >
          <img
            v-if="tabActive === 'NS'"
            v-for="(poster, index) in nsPosters"
            :src="poster.url"
            :alt="index"
            loading="lazy"
            class="cursor-pointer hover:scale-105 transition-all duration-200"
            @click="bookMovie(poster)"
          />

          <img
            v-else-if="tabActive === 'CS'"
            v-for="(poster, index) in csPosters"
            :src="poster.url"
            :alt="index"
            loading="lazy"
            class="cursor-not-allowed hover:scale-105 transition-all duration-200"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { nsPosters, csPosters } from "../posters/poster";
import { useRouter } from "vue-router";

const tabActive = ref("NS");

const router = useRouter();

const bookMovie = (poster) => {
  router.push({
    name: "movieBook",
    params: { movie: poster.title },
    query: { ...poster },
  });
};
</script>
