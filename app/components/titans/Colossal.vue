<template>
  <TitanBase 
    :titan-id="4"
    :character-ids="[1, 95]"
    background-class="background-gif-colossal"
    :titan-images="titanImages">
  </TitanBase>
</template>

<script setup>

const titanImages = ['https://imgur.com/OGrhlDr.jpg', 'https://imgur.com/yCT4526.png'
]
</script>

<style>
.background-gif-colossal {
  background-image: url("/colossal.gif");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}
</style>
