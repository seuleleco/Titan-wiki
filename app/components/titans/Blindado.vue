<template>
  <TitanBase 
    :titan-id="5"
    :character-ids="[86]"
    background-class="background-gif-blindado"
    :titan-images="titanImages">
  </TitanBase>
</template>

<script setup>

const titanImages = [
  'https://static.zerochan.net/Armored.Titan.full.4017176.jpg'
]
</script>

<style>
.background-gif-blindado {
  background-image: url("/blindado.gif");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}
</style>

