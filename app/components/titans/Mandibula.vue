<template>
  <TitanBase
    :titan-id="8"
    :character-ids="[89, 91, 176, 96]"
    background-class="background-gif-mandibula"
    :titan-images="titanImages">
  </TitanBase>
</template>

<script setup>

const titanImages = ['https://static0.srcdn.com/wordpress/wp-content/uploads/2022/03/Falco-Jaw-Titan-in-Attack-on-Titan.jpg', 'https://i.pinimg.com/1200x/1e/f4/09/1ef409da241abdf6907d99f23e81e2ba.jpg', 'https://i.pinimg.com/736x/7b/ff/49/7bff49ec800ddf474ca9136819e0651c.jpg', 'https://i.namu.wiki/i/Gr7tOqufZrM61rybTLYpDp3-lt1fDicdY8PmzM8sT8lpNUj0dcImPBGTjJ2Al30gfC_LFiSz4hY0av4_jnXEBKRZcdmiwHRRaiLckHgoIkktqE2SoenvT7bM0z4cCrT1VCD1Oak_klgfeCmSgrhh5ye3xVpt3oVEz5TVQPphJY4.webp'
]
// if (titanImages[1] || titanImages[2]) {
//   Object.assign(titanImages[1].style, {
//     transform: translateY(-100px)
//   });
// }

</script>

<style scoped>
:deep(.background-gif-mandibula) {
  background-image: url("/mandibula.gif");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}

:deep(.swiper-slide:nth-child(2) img),
:deep(.swiper-slide:nth-child(3) img) {
  transform: translateY(-100px);
}

</style>

