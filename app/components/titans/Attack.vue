<template>
  <div class="background-border">
  <div class="min-vw-100 background-gif-attack">
    <div class="row w-100 ">
      <div class="col-4 lg-6 ps-5 conteudo">
        
        <h1 class="display-4 fw-bold">{{ titan1 }}</h1>
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
        <div class="carousel-caption caption-top">
          <h5 >{{ eren2 }}</h5>
        </div>
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
import { getTitanById } from '../../../services/titanApi'
import { getCharacterByIds } from '../../../services/charactersApi'

const titan1 = ref('')
const erenJ  = ref('')
const eren2  = ref('')
const grisha  = ref('')

onMounted(async () => {
   titan1.value = await getTitanById(1)
   const characters = await getCharacterByIds([188, 98, 160])
   erenJ.valeu = characters.find(character => character.id === 188)?.name
   eren2.value = characters.find(character => character.id === 98)?.name
   grisha.value = characters.find(character => character.id === 160)?.name
})

useCarousel('#titanCarousel')

const titanimg = ['https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/04/Eren-Attack-Titan-Final-Season.jpeg',
'https://image.idntimes.com/post/20200821/grisha-yeager-3a9273d4414d436bd5840ef7d089d172.jpg',
'https://i.imgur.com/HFFycBY.png'
]

const titanCaptions = []

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



.carousel-item {
  position: relative;

}


.caption-top {
  top: -10px;
  left: -1vh;
  bottom: auto;
    width: 70vh;
  height: 5vh;
  background-image: linear-gradient(rgb(0, 0, 0), rgb(99, 0, 0));
 border-radius: 20px 20px 20px 20px;
  border-color: none;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
}

.carousel-item:hover .caption-top {
  opacity: 1;
}
</style>
