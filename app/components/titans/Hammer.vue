<template>
  <TitanBase 
    :titan-id="3"
    :character-ids="[188, 118]"
    background-class="background-gif-hammer"
    :titan-images="titanImages">
  </TitanBase>
</template>

<script setup>

const titanImages = ['https://static0.srcdn.com/wordpress/wp-content/uploads/2024/05/attack-on-titan-s-war-hammer-titan-generating-a-weapon.jpg',
  'https://m.media-amazon.com/images/M/MV5BMTU2MDhmN2MtNmU3NS00YjdjLTkxMjItNzg3NzU3ZGYwMWRlXkEyXkFqcGc@._V1_.jpg'
]
</script>

<style>
.background-gif-hammer {
  background-image: url("/hammer.gif");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}
</style>

