<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

</script>

<template>
  <div class="page">
    <NuxtPage />
  </div>
</template>
