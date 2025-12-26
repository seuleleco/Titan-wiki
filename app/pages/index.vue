<template>
  <div v-if="!isMobile" class="containerbg min-vw-100">
  <div class="containerbg min-vw-100">
    <Header
      :modelValue="componenteAtual"
      @update:modelValue="componenteAtual = $event"
    ></Header>

    <transition name="fade" mode="out-in">
      <component :is="componenteAtivo" />
    </transition>
  </div>
  </div>
  <div v-else class="mobile-block">
    <h2>Acesso bloqueado</h2>
    <p>Este site requer uma tela com largura mínima de 900px</p>
    <p>Versão para telas menores esta em desenvolvimento.</p>
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

const isMobile = ref(false)

onMounted(() => {
  const checkScreenSize = () => {
    isMobile.value = window.innerWidth < 900
  }
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
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
.mobile-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  text-align: center;
}

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

</style>