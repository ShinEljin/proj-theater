<template>
  <div
    class="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 cursor-pointer"
    :class="`${
      buttonActive ? 'bg-white shadow-2xl shadow-white' : 'bg-gray-500'
    }`"
    @click="changeButtonColor"
  ></div>
</template>

<script setup>
import { ref } from "vue";

const buttonActive = ref(false);

function changeButtonColor() {
  buttonActive.value = !buttonActive.value;
}
</script>
