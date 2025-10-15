<template>
  <div class="background-border">
  <div class="min-vw-100 background-gif-attack">
    <div class="row w-100 ">
      <div class="col-4 lg-6 ps-5 conteudo">
        
        <h1 class="display-4 fw-bold">{{ name }}</h1>
        <p class="lead">ALtura:
          <br></br> Habilidade:</p>
        <button class="btn btn-danger">Mais Detalhes</button>
      </div>


      <div class="col-lg-2 text-end pe-0 imgcentro">
          <div id="titanCarousel" class="carousel slide" data-bs-ride="carousel"  >
            <div class="carousel-inner">
              <div v-for="(img, i) in titanimg" :key="i" class="carousel-item" :class="{ active: i === 0 }">

        <img
        :src="img"
        class="img-fluid"
        :alt="`Slide ${i + 1}`"
        style="max-height: 80vh; object-fit: contain;"> 
        <figcaption class="titan-caption">
          {{ titanCaptions[i] }}
        </figcaption>
      </div>
      </div>
      </div>
      </div>
    </div>
  </div>
  </div>
</template>


<script setup>
import { useCarousel } from '../../../composables/useCarousel'

useCarousel('#titanCarousel')

const titanimg = ['https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/04/Eren-Attack-Titan-Final-Season.jpeg',
'https://i.imgur.com/HFFycBY.png']

const titanCaptions = ['EREN YEGAR', 'EREN KRUGER']

const { name } = await $fetch("https://api.attackontitanapi.com/titans/1");



// export default {
//   data() {
//     return {
//       name,
//     };
//   },
// };
</script>

<style>
.background-border {
  position: relative;
  display: inline-block;   
  overflow: hidden;
  border-radius: 8px; 
}
.background-border::after {
  content: "";
  position: absolute;
  inset: 0;                
  background: radial-gradient(circle, transparent 45%, #000 100%);
  pointer-events: none;   
}
.background-gif-attack {
  background-image: url("/attack.gif");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  margin: 0;
}
 .imgcentro {
    margin-top: 25vh;
    width: 70vh;
    
  }
  .img-fluid{
     border-radius: 20px 20px 20px 20px;
  border-color: none;

  }
.conteudo {
  height: 70vh;
  width: 30vw;
  margin-top: 13vh;
  margin-left: 45vh;
  background-image: linear-gradient(rgb(0, 0, 0), rgb(99, 0, 0));
  color: white;
  border-radius: 20px 20px 20px 20px;
  border-color: none;

  
}
</style>
