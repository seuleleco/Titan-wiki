<template>
  <TitanBase 
    :titan-id="8"
    :character-ids="[89, 91, 176, 96]"
    background-class="background-gif-attack"
    :titan-images="titanImages">
  </TitanBase>
</template>

<script setup>

const titanImages = ['https://static0.srcdn.com/wordpress/wp-content/uploads/2022/03/Falco-Jaw-Titan-in-Attack-on-Titan.jpg', 'https://i.pinimg.com/1200x/1e/f4/09/1ef409da241abdf6907d99f23e81e2ba.jpg'
]
</script>

<style>
.background-gif-mandibula {
  background-image: url("/mandibula.gif");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}
</style>

