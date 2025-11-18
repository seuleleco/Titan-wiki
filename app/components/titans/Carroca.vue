<template>
  <TitanBase 
    :titan-id="9"
    :character-ids="[88]"
    background-class="background-gif-carroca"
    :titan-images="titanImages">
  </TitanBase>
</template>

<script setup>

const titanImages = [
  'https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/12/Cart-Titan-Header.jpg'
]
</script>

<style>
.background-gif-carroca {
  background-image: url("/carroca.gif");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}
</style>


