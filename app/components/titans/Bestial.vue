<template>
  <TitanBase 
    :titan-id="7"
    :character-ids="[184, 97]"
    background-class="background-gif-bestial"
    :titan-images="titanImages">
  </TitanBase>
</template>

<script setup>

const titanImages = ['https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/04/Beast-Titan-Season-4-.jpg', 'https://imgur.com/YGOHkJw.png'
]
</script>

<style>
.background-gif-bestial {
  background-image: url("/bestial.gif");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}
</style>
