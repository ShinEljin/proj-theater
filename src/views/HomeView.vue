<script setup>
import HomeLanding from "../components/HomeLanding.vue";

import CardCollection from "../components/CardCollection.vue";
import { nsPosters, csPosters } from "../posters/poster";
</script>

<template>
  <main>
    //test
    <HomeLanding />
    <div class="bg-black">
      <CardCollection title="NOW SHOWING" :posters="nsPosters" />
      <CardCollection title="COMING SOON" :posters="csPosters" />
    </div>
  </main>
</template>
