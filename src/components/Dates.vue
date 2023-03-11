<template>
  <div
    class="flex flex-row flex-wrap md:flex-nowrap justify-start gap-2 md:gap-6 lg:gap-8 bg-[#000000af] rounded-xl my-12"
  >
    <div
      v-for="(date, index) in dates"
      :key="date.dayNum"
      class="cursor-pointer py-1 px-2 md:py-2 md:px-4 lg:py-4 lg:px-8 flex items-center justify-center flex-col md:leading-[0.7rem] rounded-lg"
      :class="{ 'bg-red-700': activeDate === date.dayNum }"
      @click="changeDate(date.dayNum)"
    >
      <h5 class="text-base">Jan</h5>
      <h3 class="font-bold text-xl md:text-4xl">{{ date.dayNum }}</h3>
      <h5 class="text-sm mt-1 tracking-wide">
        {{ date.weekday }}
      </h5>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeDate = ref(20);

const changeDate = (num) => {
  activeDate.value = num;
};

const dates = [
  {
    dayNum: 20,
    weekday: "Monday",
  },
  {
    dayNum: 21,
    weekday: "Tuesday",
  },
  {
    dayNum: 22,
    weekday: "Wednesday",
  },
  {
    dayNum: 23,
    weekday: "Thursday",
  },
  {
    dayNum: 24,
    weekday: "Friday",
  },
  {
    dayNum: 25,
    weekday: "Saturday",
  },
  {
    dayNum: 26,
    weekday: "Sunday",
  },
];
</script>
