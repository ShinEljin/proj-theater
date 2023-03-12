<template>
  <div class="mt-24">
    <CinemaCard
      v-for="(poster, index) in nsPosters"
      :movie="poster"
      :index="index"
    />
  </div>
</template>

<script setup>
import CinemaCard from "../components/CinemaCard.vue";
import { nsPosters } from "../posters/poster";
</script>
