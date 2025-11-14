<template>
  <div class="background-border">
    <div class="min-vw-100 background-gif-female">
      <div class="row w-100 ">
        <div class="col-12 col-lg-6 ps-5 conteudo">
          <div class="ms-5 mt-5">
            <h1 class="display-4 fw-bold ">{{ titanName }}</h1>
            <div class="text-start mt-5 ">
              <p class="lead fw-bold">ALtura: <span class="fw-normal">{{ altura }}</span></p>
              <p class="lead fw-bold"> Habilidade: <span class="fw-normal">{{ skils }}</span></p>
              <p class="lead fw-bold"> Aliança: <span class="fw-normal">{{ alianca }}</span></p>
              <p class="lead fw-bold"> Herdeiro: <span class="fw-normal"><br> {{ charActual }} <span
                    class="fs-6 fs-light fst-italic">Herdeiro Atual</span></span><br>
                <button class="btn btn-danger" data-toggle="collapse" @click="showHerd = !showHerd">
                  <i :class="showHerd ? 'bi bi-caret-up-fill' : 'bi bi-caret-down-fill'"></i>
                  Herdeiros Anteriores
                </button>
                <br>
                <Transition name=slide-fade>
                  <span class="lead fw-normal" v-if="showHerd">Sem informações<br></span>
                </Transition>
              </p>
            </div>
            <button class="btn btn-danger disabled">Mais Detalhes(em breve)</button>
          </div>
        </div>
        <div class="col-12 col-lg-6 text-end pe-0 imgcentro">
          <div id="titanCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(img, i) in titanimg" :key="i" class="carousel-item" :class="{ active: i === 0 }">
                <img :src="img" class="img-fluid" :alt="`Slide ${i + 1}`"
                  style="max-height: 80vh; object-fit: contain;">
                <div class="carousel-caption caption-top">
                  <h5>{{ titanCaptions[i] }}</h5>
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
import { getTitanByIds } from '../../../services/titanApi'
import { getCharacterByIds } from '../../../services/charactersApi'


const titanName = ref('')
const altura = ref('')
const skils = ref('')
const charActual = ref('')
const alianca = ref('')
const showHerd = ref(false)

onMounted(async () => {
  const titans = await getTitanByIds([6])
  titanName.value = titans.find(titan => titan.id === 6)?.name
  altura.value = titans.find(titan => titan.id === 6)?.height
  skils.value = titans.find(titan => titan.id === 6)?.abilities
  alianca.value = titans.find(titan => titan.id === 6)?.allegiance
  const characters = await getCharacterByIds([87])
  charActual.value = characters.find(character => character.id === 87)?.name

})
useCarousel('#titanCarousel')
const titanimg = ['https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/09/Attack-On-Titan-Female-Titan-Glaring.jpg'
]
const titanCaptions = [charActual]
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

.background-gif-female {
  background-image: url("/female.gif");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  margin: 0;
}

.imgcentro {
  margin-top: 25vh;
  width: 70vh;

}

.img-fluid {
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

.fs-6 {
  font-size: 0.9rem !important;
  color: rgb(255, 255, 255);
  font-family: fantasy;
}


.slide-fade-enter-active {
  transition: all 0.8s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media (max-width: 1379px) {
  .conteudo {
    margin-left: 0;
    width: 40vw;
    margin-top: 5vh;
  }

  .imgcentro {
    margin-top: 5vh;
    width: 50%;
  }

  .background-border::after {
    background: radial-gradient(circle, transparent 85%, #000 100%);
  }
}
</style>


<!-- <template>
  <div class="vw-100 background-gif-blindado">
    <h1>blindado</h1>
  </div>
</template>

<style>
.background-gif-blindado {
  background-image: url("/blindado.gif");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  margin: 0;
}
</style>
https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/09/armored-titan-1.jpg -->














<!-- <template>
  <div class="min-vw-100 background-gif-female">
    <h1>femea</h1>
  </div>
</template>

<style>
.background-gif-female {
  background-image: url("/female.gif");
  background-size: cover;
  background-attachment: fixed;

  min-height: 100vh;
  margin: 0;
}
</style>
https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/09/Attack-On-Titan-Female-Titan-Glaring.jpg -->
