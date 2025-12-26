<template>
  <TitanBase 
    :titan-id="1"
    :character-ids="[188, 160, 98 ]"
    background-class="background-gif-attack"
    :titan-images="titanImages">
  </TitanBase>
</template>

<script setup>

const titanImages = [
  'https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/04/Eren-Attack-Titan-Final-Season.jpeg',
  'https://i.pinimg.com/1200x/75/45/ac/7545ac7370c006b9b98828775cd246ed.jpg',
  'https://i.imgur.com/HFFycBY.png'
]
</script>

<style>
.background-gif-attack {
  background-image: url("/attack.gif");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}
</style>
