<template>
  <!-- <div
    class="flex flex-col justify-center gap-12 h-full max-w-6xl mx-auto bg-black py-8 px-8"
  >
    <div class="text-white flex justify-between items-center">
      <h1 class="text-4xl font-bold">{{ title }}</h1>
      <a href="!#" class="text-gray-400 text-2xl pr-8">See more</a>
    </div>
    <div>
 
    </div>
  </div> -->
  <swiper
    :modules="modules"
    effect="fade"
    :slides-per-view="3"
    :space-between="20"
    navigation
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="poster in posters" class="w-fit"
      ><img :src="poster" :alt="poster" loading="lazy"
    /></swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, EffectFade } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper styles
export default {
  props: {
    posters: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, EffectFade],
    };
  },
};
</script>
