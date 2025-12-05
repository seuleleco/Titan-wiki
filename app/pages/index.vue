<template>
  <div class="d-none minititan ">
    <img src="/minititan.png" alt="minititan" />
  </div>
  <div class="containerbg min-vw-100">
    <Header
      :modelValue="componenteAtual"
      @update:modelValue="componenteAtual = $event"
    ></Header>

    <transition name="fade" mode="out-in">
      <component :is="componenteAtivo" />
    </transition>
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Attack from "~/components/titans/Attack.vue";
import Hammer from "~/components/titans/Hammer.vue";
import Colossal from "~/components/titans/Colossal.vue";
import Blindado from "~/components/titans/Blindado.vue";
import Female from "~/components/titans/Female.vue";
import Bestial from "~/components/titans/Bestial.vue";
import Carroca from "~/components/titans/Carroca.vue";
import Mandibula from "~/components/titans/Mandibula.vue";



useHead({
  script: [{src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
    defer: true
  }]
})

const titansComponents = {
  Attack,
  Hammer,
  Colossal,
  Blindado,
  Female,
  Bestial,
  Carroca,
  Mandibula,
};
const componenteAtual = ref("Attack");
const componenteAtivo = computed(() => titansComponents[componenteAtual.value]);
</script>

<style>
body {
  margin: 0;
  background-color: black;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-40px);
  filter: blur(20px);
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-40px);
  filter: blur(20px);
}



/* @media (max-width: 768px){
  .containerbg {
    display: none !important;
  }
  .minititan {
  display: flex !important;
  position: fixed;
  top: 65vh;
  left: 18vh;
  width: 20vh;
  height: 20vh;
  z-index: 9;
}
  body::before {
    content: "📱No momento, o site não é compativel com dispositivos moveis";

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 2rem;
    color: white;
    background: #333;
   
  }
} */
</style>