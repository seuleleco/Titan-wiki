<template>
  <div class="video-background">
    <video autoplay muted loop class="background-video">
      <source src="https://imgur.com/BkGkSSs.mp4" type="video/mp4">
    </video>
  <TitanBase 
    :titan-id="1"
    :character-ids="[188, 160, 98 ]"
    background-class="background-video-attack"
    :titan-images="titanImages">
  </TitanBase>
  </div>
</template>

<script setup>

const titanImages = [
  'https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/04/Eren-Attack-Titan-Final-Season.jpeg',
  'https://i.pinimg.com/1200x/75/45/ac/7545ac7370c006b9b98828775cd246ed.jpg',
  'https://i.imgur.com/HFFycBY.png'
]
</script>

<style>
.video-background {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.background-video-attack {
  position: relative;
  z-index: 1;
  min-height: 100vh;
}
</style>
