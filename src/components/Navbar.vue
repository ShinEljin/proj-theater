<template>
  <nav class="w-full fixed top-0 px-4 z-10 backdrop-filter backdrop-blur-lg">
    <div
      class="text-gray-400 flex items-center justify-between md:justify-start md:gap-28 h-16 max-w-6xl mx-auto"
    >
      <button
        class="text-2xl text-white font-bold uppercase tracking-wider border-b-2 border-red-500 px-4 py-2 rounded-full"
        @click="route('home')"
      >
        <!-- THEATER -->
        THEATER
      </button>
      <div class="gap-28 hidden md:flex">
        <button
          class="hover:tracking-wider hover:scale-110 transition-all duration-200 hover:text-gray-200 hover:underline px-2 py-3"
          @click="route('home')"
        >
          HOME
        </button>
        <button
          class="hover:tracking-wider hover:scale-110 transition-all duration-200 hover:text-gray-200 hover:underline px-2 py-3"
          @click="route('cinemas')"
        >
          CINEMAS
        </button>
        <button
          class="hover:tracking-wider hover:scale-110 transition-all duration-200 hover:text-gray-200 hover:underline px-2 py-3"
          @click="route('movies')"
        >
          MOVIES
        </button>
      </div>
      <button type="button" @click="menuOpen = !menuOpen" v-if="!menuOpen">
        <i class="fa-solid fa-bars text-3xl text-white block md:hidden"></i>
      </button>
      <button type="button" @click="menuOpen = !menuOpen" v-if="menuOpen">
        <i class="fa-solid fa-xmark text-4xl text-white block md:hidden"></i>
      </button>
    </div>
    <div
      class="backdrop-filter backdrop-blur-lg text-white rounded-md flex flex-col items-center gap-4 py-4 shadow-2xl"
      v-if="menuOpen"
    >
      <button
        class="text-xl hover:tracking-wider hover:scale-110 transition-all duration-200 hover:underline hover:text-gray-200 px-6 py-3"
        @click="route('home')"
      >
        HOME
      </button>
      <button
        class="text-xl hover:tracking-wider hover:scale-110 transition-all duration-200 hover:underline hover:text-gray-200 px-6 py-3"
        @click="route('cinemas')"
      >
        CINEMA
      </button>
      <button
        class="text-xl hover:tracking-wider hover:scale-110 transition-all duration-200 hover:underline hover:text-gray-200 px-6 py-3"
        @click="route('movies')"
      >
        MOVIES
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const route = (name) => {
  menuOpen.value = false;
  router.push({ name });
};

const menuOpen = ref(false);
</script>

<style>
a.router-link-exact-active {
  color: rgb(229 231 235);
  text-decoration: underline;
  letter-spacing: 0.05em;
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
</style>
