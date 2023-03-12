<template>
  <div
    class="top-0 fixed bg-[rgba(0,0,0,0.44)] w-full h-full"
    @click.self="$emit('closeModal')"
  >
    <div
      class="w-[90%] max-w-[470px] h-[250px] p-5 my-[200px] mx-auto bg-white rounded-xl flex items-center justify-center flex-col | modal"
    >
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
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

defineEmits(["closeModal"]);

const bookAnother = () => {
  router.push({ name: "movies" });
};

const goHome = () => {
  router.push({ name: "home" });
};
</script>

<style scoped>
.modal {
  animation: popup 0.7s;
}

@keyframes popup {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  60% {
    transform: scale(1.1);
  }
  70% {
    transform: scale(1.2);
  }
  80% {
    transform: scale(1);
  }
  90% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
