<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

</script>

<template>
  <div class="page">
    <NuxtPage />
  </div>
</template>
