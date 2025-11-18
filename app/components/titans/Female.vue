<template>
  <TitanBase 
    :titan-id="6"
    :character-ids="[87]"
    background-class="background-gif-female"
    :titan-images="titanImages">
  </TitanBase>
</template>

<script setup>

const titanImages = ['https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/09/Attack-On-Titan-Female-Titan-Glaring.jpg'
]
</script>

<style>
.background-gif-female {
  background-image: url("/female.gif");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}
</style>
