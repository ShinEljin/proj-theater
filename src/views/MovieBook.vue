<template>
  <div
    class="text-white pt-24 bg-main-bg bg-right-bottom bg-cover min-h-screen"
  >
    <div class="max-w-6xl mx-auto px-4 lg:px-0">
      <Dates />

      <MovieInfo @chooseSeat="handleClick" />
    </div>
  </div>
  <div class="min-h-screen" ref="movieSeats" v-if="chooseSeatOpen">
    <div
      class="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 lg:px-0 h-screen"
    >
      <CinemaBox />

      <button
        type="button"
        class="bg-red-600 px-4 py-4 rounded-lg hover:scale-110 hover:opacity-80 transition-all duration-400 font-semibold text-white w-[16rem] mt-12"
        @click="toggleModal"
      >
        BOOK NOW
      </button>
    </div>
  </div>
  <BookedModal @closeModal="toggleModal" v-if="bookedModal" />
</template>

<script setup>
import Dates from "../components/Dates.vue";
import MovieInfo from "../components/MovieInfo.vue";
import CinemaBox from "../components/CinemaBox.vue";
import BookedModal from "../components/BookedModal.vue";
import { ref } from "vue";

const movieSeats = ref(null);
const chooseSeatOpen = ref(false);
const bookedModal = ref(false);

const toggleModal = () => {
  bookedModal.value = !bookedModal.value;
};

const handleClick = () => {
  chooseSeatOpen.value = true;
  setTimeout(() => {
    movieSeats.value.scrollIntoView({ behavior: "smooth" });
  }, 150);
};
</script>
