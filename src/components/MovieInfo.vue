<template>
  <div
    class="flex flex-col md:flex-row justify-center md:justify-start items-center bg-[#000000af] rounded-xl py-4"
  >
    <img :src="query.url" :alt="query.title" class="max-w-[20rem]" />
    <div
      class="md:pl-24 lg:max-w-[55%] flex flex-col justify-center items-center md:items-start"
    >
      <h1
        class="font-bold text-4xl md:text-5xl pb-2 text-center md:text-left px-4 md:px-0 mt-2 md:0"
      >
        {{ query.hTitle }}
      </h1>
      <p class="text-xl md:text-2xl text-gray-500 tracking-wide pb-8">
        3h 10min PG
      </p>
      <p class="text-xl flex items-center gap-6 pb-10">
        Time:
        <span class="text-gray-400 bg-gray-400 text-2xl">TESTTTTTTTTTTES</span>
      </p>
      <button
        type="button"
        class="bg-red-600 w-[70%] md:w-[50%] px-4 py-4 rounded-lg hover:scale-110 hover:opacity-80 transition-all duration-400 font-semibold"
        @click="$emit('chooseSeat')"
      >
        CHOOSE YOUR SEAT
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

defineEmits(["chooseSeat"]);

const { params, query } = useRoute();
</script>

<style lang="scss" scoped></style>
