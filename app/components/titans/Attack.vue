<template>
  <div class="min-vw-100 background-gif-attack">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
const { name } = await $fetch("https://api.attackontitanapi.com/titans/1");

export default {
  data() {
    return {
      name,
    };
  },
};
</script>

<style>
.background-gif-attack {
  background-image: url("/attack.gif");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  margin: 0;
}
</style>
