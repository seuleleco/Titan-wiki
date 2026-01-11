<template>
  <div class="video-background">
    <video autoplay muted loop class="background-video">
      <source src="https://imgur.com/Htf0lh2.mp4" type="video/mp4">
    </video>
  <TitanBase 
    :titan-id="3"
    :character-ids="[188, 118]"
    background-class="background-video-hammer"
    :titan-images="titanImages">
  </TitanBase>
  </div>
</template>

<script setup>

const titanImages = ['https://m.media-amazon.com/images/M/MV5BMTU2MDhmN2MtNmU3NS00YjdjLTkxMjItNzg3NzU3ZGYwMWRlXkEyXkFqcGc@._V1_.jpg', 'https://static0.srcdn.com/wordpress/wp-content/uploads/2024/05/attack-on-titan-s-war-hammer-titan-generating-a-weapon.jpg'
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

  .background-video-hammer {
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }
</style>

