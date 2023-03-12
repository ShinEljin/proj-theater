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

  <BookedModal :modalActive="modalActive" @close-modal="toggleModal">
    <h1 class="font-bold text-2xl text-center mb-8">
      YOU ARE SUCCESSFULLY BOOKED!
    </h1>
    <button
      class="bg-red-600 px-4 py-4 rounded-lg hover:scale-110 hover:opacity-80 transition-all duration-400 font-semibold text-white w-[16rem]"
      @click="bookAnother"
    >
      BOOK ANOTHER
    </button>
    <button
      class="px-4 py-4 rounded-lg hover:scale-110 hover:opacity-80 transition-all duration-400 font-semibold text-red-600 w-[16rem]"
      @click="goHome"
    >
      HOME
    </button>
  </BookedModal>
</template>

<script setup>
import Dates from "../components/Dates.vue";
import MovieInfo from "../components/MovieInfo.vue";
import CinemaBox from "../components/CinemaBox.vue";
import BookedModal from "../components/BookedModal.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const movieSeats = ref(null);
const chooseSeatOpen = ref(false);

const handleClick = () => {
  chooseSeatOpen.value = true;
  setTimeout(() => {
    movieSeats.value.scrollIntoView({ behavior: "smooth" });
  }, 150);
};

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

const bookAnother = () => {
  router.push({ name: "movies" });
};

const goHome = () => {
  router.push({ name: "home" });
};
</script>
