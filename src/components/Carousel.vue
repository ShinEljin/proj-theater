<template>
  <swiper
    :breakpoints="bp"
    :modules="[Navigation]"
    :navigation="true"
    :long-swipes="true"
    :slides-per-view="1.8"
    :space-between="10"
    :loop="true"
  >
    <swiper-slide v-for="(poster, index) in posters" :key="index">
      <img
        :src="poster.url"
        :alt="index"
        @click="bookMovie(poster, index)"
        class="cursor-pointer"
    /></swiper-slide>
  </swiper>
</template>

<script setup>
// import Swiper core and required modules
import { Navigation } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "vue-router";

defineProps({
  posters: Array,
});

const bp = {
  380: {
    slidesPerView: 2.4,
    spaceBetween: 10,
  },
  580: {
    slidesPerView: 3.3,
    spaceBetween: 15,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

const router = useRouter();

const bookMovie = (poster, index) => {
  if (poster.hTitle) {
    router.push({
      name: "movieBook",
      params: { movie: index },
    });
  }
};
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  right: 10px;
  padding: 30px;
  color: #f00 !important;
  fill: #f00 !important;
  stroke: #f00 !important;
}

@media only screen and (max-width: 768px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}
</style>
