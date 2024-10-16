<script setup lang="ts">
import { ref } from "vue";
import helloService from "./services/hello.service";

const response = ref<any>({});

helloService.hello().then((res) => {
  response.value = res;
});
</script>

<template>
  <div>
    output from serve-side:
    <div>
      {{ response }}
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
