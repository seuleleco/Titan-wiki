<template>
  <div class="background-border">
    <div class="min-vw-100" :class="backgroundClass">
      <div class="row w-100">
        <div class="col-12 col-lg-6 ps-5 conteudo">
          <div class="ms-5 mt-5">
            <h1 class="display-4 fw-bold">{{ titanName }}</h1>
            <div class="text-start mt-5">
              <p class="lead fw-bold">Altura: <span class="fw-normal">{{ altura }}</span></p>
              <p class="col-11 lead fw-bold">Habilidade: <span class="fw-normal">{{ skils }}</span></p>
              <p class="lead fw-bold">Aliança: <span class="fw-normal">{{ alianca }}</span></p>
              <p class="lead fw-bold">Herdeiro: <span class="fw-normal"><br>{{ charActual }}
                <span class="fs-6 fs-light fst-italic">Herdeiro Atual</span></span><br>
                <Transition name="fade">
                  <div class="lead fw-normal" v-if="showHerd">
                    <div v-if="previousHerd.length > 0">
                      <div v-for="herd in previousHerd" :key="herd">{{ herd }}</div>
                    </div>
                     <div v-else>Sem Informações<br></div>
                  </div>
                </Transition>
                <button class="btn btn-danger" @click="showHerd = !showHerd">
                  <i :class="showHerd ? 'bi bi-caret-up-fill' : 'bi bi-caret-down-fill'"></i>
                  Herdeiros Anteriores
                </button>
              </p>
            </div>
            <button class="btn btn-danger disabled">Mais Detalhes(em breve)</button>
          </div>
        </div>
        <div class="col-12 col-lg-6 text-end pe-0 imgcentro">
          <div id="titanCarousel" class="swiper">
            <div class="swiper-wrapper">
              <div v-for="(img, i) in titanimg" :key="i" class="swiper-slide">
                <div class="image-container">
                  <img :src="img" class="img-fluid" :alt="`Slide ${i + 1}`">
                  <div class="titan-caption">
                    <h5>{{ titanCaptions[i] }}</h5>
                  </div>
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
import { useCarousel } from '../../composables/useCarousel'
import { getTitanByIds } from '../../services/titanApi'
import { getCharacterByIds } from '../../services/charactersApi'

const props = defineProps({
  titanId: Number,
  characterIds: Array,
  backgroundClass: String,
  titanImages: Array
})

const titanName = ref('')
const altura = ref('')
const skils = ref('')
const alianca = ref('')
const charActual = ref('')
const char2 = ref('')
const char3 = ref('')
const char4 = ref('')
const showHerd = ref(false)

const previousHerd = computed(() => {
  return [char2.value, char3.value, char4.value].filter(Boolean)
})

onMounted(async () => {
  const titans = await getTitanByIds([props.titanId])
  const titan = titans.find(t => t.id === props.titanId)
  titanName.value = titan?.name
  altura.value = titan?.height
  skils.value = titan?.abilities
  alianca.value = titan?.allegiance

  const characters = await getCharacterByIds(props.characterIds)
  charActual.value = characters[0]?.name
  char2.value = characters[1]?.name
  char3.value = characters[2]?.name
  char4.value = characters[3]?.name
})

useCarousel('#titanCarousel')

const titanimg = computed(() => props.titanImages)
const titanCaptions = computed(() => [charActual.value, char2.value, char3.value, char4.value])
</script>
